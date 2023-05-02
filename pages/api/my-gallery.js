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
    'SELECT favs_meals.meal_id, name, icon, composition FROM favs_meals INNER JOIN meals ON meals.meal_id=favs_meals.meal_id WHERE favs_meals.user_id=?',
    userId
  )

  return res?.status(200).json(
    rows.map((row) => {
      return {
        id: row?.meal_id,
        name: row?.name,
        icon: row?.icon,
        composition: row?.composition
      }
    })
  )
}
