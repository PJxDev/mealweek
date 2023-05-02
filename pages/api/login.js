import jwt from 'jsonwebtoken'
import { pool } from '../../config/database'
import bcrypt from 'bcrypt'
import { serialize } from 'cookie'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    return await checkUser({ req, res })
  }

  async function checkUser({ req, res }) {
    const { username, password } = req?.body
    try {
      const [[result]] = await pool.query(
        'SELECT * FROM users WHERE username=?',
        username
      )
      const { username: userBD, password: passBD, user_id: userId } = result

      const isValido =
        bcrypt.compareSync(password, passBD) && username === userBD
      if (isValido) {
        const token = jwt.sign(
          {
            exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7,
            username: userBD,
            id: userId
          },
          process.env.PASS_SECRET
        )

        const serialized = serialize('tkn', token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'strict',
          path: '/'
        })

        res.setHeader('Set-Cookie', serialized)

        return res?.status(200).json('Usuario correcto')
      } else throw new Error()
    } catch (error) {
      console.log(error)
      return res?.status(301).json('Usuario o contraseña incorrecta')
    }
  }
}
