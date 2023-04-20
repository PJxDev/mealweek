import { pool } from '../../config/database'
import bcrypt from 'bcrypt'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    return await getUser({ req, res })
  }

  async function getUser({ req, res }) {
    const { username, password } = req?.body
    try {
      const [[result]] = await pool.query(
        'SELECT * FROM users_login_table WHERE username=?',
        username
      )
      const { username: userBD, password: passBD } = result

      const isValido =
        bcrypt.compareSync(password, passBD) && username === userBD

      if (isValido) return res?.status(200).json('Usuario correcto')
      else throw new Error()
    } catch (error) {
      return res?.status(301).json('Usuario o contraseña incorrecta')
    }
  }
}
