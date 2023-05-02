import { pool } from '../../config/database'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    return await getMeals({ req, res })
  }
  if (req.method === 'POST') {
    return await createMeals({ req, res })
  }
}

async function createMeals({ req, res }) {
  try {
    const { author, name, icon, description, composition, ingredients } =
      req?.body

    const ingredientsArray = ingredients.split(',').map((el) => {
      const array = el.trim().split(' ')
      // n = name, q = quantity, t = type
      const n = array.splice(0, array.length - 2).join(' ')
      const q = array[array.length - 2]
      const t = array[array.length - 1]
      return [n, q, t]
    })
    const nameArray = ingredientsArray.map((el) => {
      return el[0]
    })
    const quantityArray = ingredientsArray.map((el) => {
      return el[1]
    })
    const typeArray = ingredientsArray.map((el) => {
      return el[2]
    })

    const [result] = await pool.query(
      'INSERT INTO meals (author_id, name, icon, description, composition) VALUES (?, ?, ?, ?, ?)',
      [author, name, icon, description, composition]
    )

    const [[dataMeal]] = await pool.query(
      'SELECT meal_id FROM meals WHERE name = ?',
      name
    )

    let queryCondition = 'name = ?,'.repeat(ingredientsArray.length).split(',')
    queryCondition.pop()
    queryCondition = queryCondition.join(' OR ')

    const [dataIngredients] = await pool.query(
      `SELECT ingredients_id FROM ingredients WHERE ${queryCondition}`,
      nameArray
    )

    queryCondition = '(?), '.repeat(dataIngredients.length).split(',')
    queryCondition.pop()
    queryCondition = queryCondition.join(',')

    const [result2] = await pool.query(
      `INSERT INTO shopping_list (meal_id, ingredient_id, quantity, type) VALUES ${queryCondition}`,
      dataIngredients.map((el, idx) => {
        return [
          dataMeal.meal_id,
          el.ingredients_id,
          quantityArray[idx],
          typeArray[idx]
        ]
      })
    )

    const [result3] = await pool.query(
      'INSERT INTO favs_meals (user_id, meal_id) VALUES (?, ?)',
      [author, dataMeal.meal_id]
    )

    return res?.status(200).json('Success creating the meal')
  } catch (error) {
    console.log(error)
    if (error.errno === 1062) {
      return res?.status(403).json('The meal exists already.')
    }
    return res?.status(403).json('There was a problem creating the meal.')
  }
}

async function getMeals({ req, res }) {
  const [rows] = await pool.query('SELECT * FROM meals')

  return res?.status(200).json(
    rows.map((row) => {
      return {
        id: row?.meal_id,
        author: row?.author_id,
        name: row?.name,
        icon: row?.icon,
        description: row?.description,
        composition: row?.composition
      }
    })
  )
}
