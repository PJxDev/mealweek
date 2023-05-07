import { pool } from '@/config/database'
import { serialize } from 'cookie'
import jwt, { verify } from 'jsonwebtoken'

export default async function handler(req, res) {
  if (req.method === 'DELETE') {
    return await deleteFav({ req, res })
  }
}

async function deleteFav({ req, res }) {
  const { tkn } = req.cookies

  try {
    const userId = req.query.id
    const mealId = req.query.mealId

    const [result2] = await pool.query(
      'DELETE FROM favs_meals WHERE user_id=? AND meal_id=?',
      [userId, mealId]
    )
    // Actualizamos tambien el valor de la cookie
    const userData = verify(tkn, process.env.PASS_SECRET)

    const token = jwt.sign(
      {
        ...userData,
        favs: userData.favs.filter((el) => el !== Number(mealId))
      },
      process.env.PASS_SECRET
    )

    const serialized = serialize('tkn', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/'
    })

    res.setHeader('Set-Cookie', serialized)

    return res?.status(200).json('Success deleting the meal in your gallery')
  } catch (error) {
    console.error(error)
    return res?.status(403).json(error.message)
  }
}
