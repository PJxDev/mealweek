import { pool } from '../../../config/database'
import bcrypt from 'bcrypt'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    return await createUser({ req, res })
  }
}

async function createUser({ req, res }) {
  try {
    const { email, username, password } = req?.body

    const hashedPass = encryptPassword(password)
    console.log(pool)

    await pool.query(
      'INSERT INTO users (username, password, email) VALUES (?, ?, ?)',
      [username, hashedPass, email]
    )

    return res?.status(200).json('Success creating the credentials')
  } catch (error) {
    console.log(error)
    if (error.errno === 1062) {
      return res?.status(400).json('Username or email alredy registered.')
    }
    return res?.status(403).json('There was a problem creating the user.')
  }
}

function encryptPassword(password) {
  return bcrypt.hashSync(password, 8)
}
