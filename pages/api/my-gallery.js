import { verify } from 'jsonwebtoken'
import { pool } from '../../config/database'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    return await getMeals({ req, res })
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
