import { pool } from '../../config/database'
import bcrypt from 'bcrypt'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    return await getUsers({ req, res })
  }
  if (req.method === 'POST') {
    return await createUser({ req, res })
  }
}

async function createUser({ req, res }) {
  const { username, password } = req?.body

  const hashedPass = encryptPassword(password)

  const [result] = await pool.query('INSERT INTO users SET ?', {
    username,
    password: hashedPass
  })
  return res?.status(200).json({ id: result?.insertId, username, hashedPass })
}

async function getUsers({ req, res }) {
  const [rows] = await pool.query('SELECT * FROM users')

  return res?.status(200).json(
    rows.map((row) => {
      return { id: row?.user_id, username: row?.username, pass: row?.password }
    })
  )
}

function encryptPassword(password) {
  return bcrypt.hashSync(password, 8)
}
