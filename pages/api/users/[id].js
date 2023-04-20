import { pool } from '../../../config/database'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    return await getUser({ req, res })
  }
  if (req.method === 'DELETE') {
    return await deleteUser({ req, res })
  }
  if (req.method === 'PUT') {
    return await modifyUser({ req, res })
  }
}

async function getUser({ req, res }) {
  const [[result]] = await pool.query(
    'SELECT * FROM users_login_table WHERE user_id=?',
    req.query.id
  )
  const { user_id: userId, username, password } = result
  return res?.status(200).json({ userId, username, password })
}

async function deleteUser({ req, res }) {
  await pool.query(
    'DELETE FROM users_login_table WHERE user_id=?',
    req.query.id
  )

  return res?.status(200).json({ greetings: 'Usuario eliminado' })
}

async function modifyUser({ req, res }) {
  try {
    const [[result]] = await pool.query(
      'SELECT * FROM users_login_table WHERE user_id = ?',
      req.query.id
    )
    if (result.length === 0) throw new Error()

    const newUser = {
      username: req.body.username ?? result.username,
      password: req.body.password ?? result.password
    }

    await pool.query(
      'UPDATE users_login_table SET username = ?, password = ? WHERE user_id = ?',
      [newUser.username, newUser.password, req.query.id]
    )

    return res
      .status(200)
      .json({ mensaje: 'Registro actualizado correctamente' })
  } catch (e) {
    console.error('El registro no existe', e)
    return res.status(404).json({ mensaje: 'El registro no existe' })
  }
}
