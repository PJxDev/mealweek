import { pool } from '../../config/database'

export default async function handler(req, res) {
  const userId = 3
  if (req.method === 'GET') {
    return await getMeals({ req, res, userId })
  }
}

async function getMeals({ req, res, userId }) {
  const [rows] = await pool.query(
    'SELECT favs_meals.meal_id, name, composition FROM favs_meals INNER JOIN meals ON meals.meal_id=favs_meals.meal_id WHERE favs_meals.user_id=?',
    userId
  )

  return res?.status(200).json(
    rows.map((row) => {
      return {
        id: row?.meal_id,
        name: row?.name,
        composition: row?.composition
      }
    })
  )
}
