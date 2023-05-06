import { pool } from '@/config/database'
import { verify } from 'jsonwebtoken'

export default async function handler(req, res) {
  if (req.method === 'DELETE') {
    return await deleteFav({ req, res })
  }
}

async function deleteFav({ req, res }) {
  try {
    const userId = req.query.id
    const mealId = req.query.mealId
    console.log(userId, mealId)

    const [result2] = await pool.query(
      'DELETE FROM favs_meals WHERE user_id=? AND meal_id=?',
      [userId, mealId]
    )
    console.log(req.body)
    console.log(result2)
    return res?.status(200).json('Success deleting the meal in your gallery')
  } catch (error) {
    console.log(error)
    return res?.status(403).json(error.message)
  }
}
