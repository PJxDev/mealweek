import { pool } from '../../../config/database'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const mealId = req.query.id
    return await getMeals({ req, res, mealId })
  }
}

async function getMeals({ req, res, mealId }) {
  const [rows] = await pool.query(
    'SELECT M.meal_id, M.name as mealName, icon, description, composition, I.name as ingredientName, quantity, type FROM meals as M INNER JOIN shopping_list as SL ON M.meal_id=SL.meal_id INNER JOIN ingredients as I ON SL.ingredient_id=I.ingredients_id WHERE SL.meal_id = ?',
    mealId
  )

  return res?.status(200).json({
    id: rows[0].meal_id,
    author: rows[0].author_id,
    name: rows[0].mealName,
    icon: rows[0].icon,
    description: rows[0].description,
    composition: rows[0].composition,
    ingredients: rows.map((row) => {
      return {
        name: row?.ingredientName,
        quantity: row?.quantity,
        type: row?.type
      }
    })
  })
}
