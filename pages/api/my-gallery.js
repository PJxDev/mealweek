import { verify } from 'jsonwebtoken'
import { pool } from '../../config/database'

export default async function handler(req, res) {
  if (req.method === 'POST' && req.body.mealId) {
    return await saveFav({ req, res })
  }
  if (req.method === 'POST') {
    return await getMeals({ req, res })
  }
  if (req.method === 'DELETE') {
    return await deleteFav({ req, res })
  }
}

async function getMeals({ req, res }) {
  const { userId } = req.body
  const [rows] = await pool.query(
    'SELECT F.meal_id, M.name as mealName, M.icon, M.composition, I.name as ingredientName, SL.quantity, SL.type FROM meals as M INNER JOIN shopping_list as SL ON M.meal_id=SL.meal_id INNER JOIN ingredients as I ON SL.ingredient_id=I.ingredients_id INNER JOIN favs_meals as F ON M.meal_id=F.meal_id WHERE F.user_id=?',
    userId
  )

  const meals = {}
  rows.forEach((row) => {
    if (!meals[row.meal_id]) {
      meals[row.meal_id] = {
        id: row.meal_id,
        name: row.mealName,
        icon: row.icon,
        composition: row.composition,
        ingredients: []
      }
    }
    meals[row.meal_id].ingredients.push({
      name: row.ingredientName,
      quantity: row.quantity,
      type: row.type
    })
  })
  const result = Object.values(meals)

  return res?.status(200).json(result)
}
async function saveFav({ req, res }) {
  try {
    const { userId, mealId } = req.body

    const [result] = await pool.query(
      'SELECT * FROM favs_meals WHERE user_id = ? AND meal_id = ?',
      [userId, mealId]
    )

    if (result.length !== 0) {
      throw new Error('The meal exists already in your gallery')
    }

    const [result2] = await pool.query(
      'INSERT INTO favs_meals (user_id, meal_id) VALUES (?, ?)',
      [userId, mealId]
    )
    return res?.status(200).json('Success saving the meal in your gallery')
  } catch (error) {
    console.log(error)
    return res?.status(403).json(error.message)
  }
}
async function deleteFav({ req, res }) {
  try {
    const { userId, mealId } = req.body

    const [result2] = await pool.query(
      'DELETE FROM favs_meals WHERE user_id=? AND meal_id=?',
      [userId, mealId]
    )
    return res?.status(200).json('Success deleting the meal in your gallery')
  } catch (error) {
    console.log(error)
    return res?.status(403).json(error.message)
  }
}
