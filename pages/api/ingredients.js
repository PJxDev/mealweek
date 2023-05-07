import { pool } from '../../config/database'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    return await getIngredients({ req, res })
  }
  if (req.method === 'POST') {
    return await createIngredients({ req, res })
  }
}

async function createIngredients({ req, res }) {
  try {
    const { name } = req?.body

    const [result] = await pool.query(
      'INSERT INTO ingredients (name) VALUES (?)',
      name
    )
    return res?.status(200).json('Success creating the ingredient')
  } catch (error) {
    console.error(error)
    if (error.errno === 1062) {
      return res?.status(403).json('The ingredient exists already.')
    }
    return res?.status(403).json('There was a problem creating the ingredient.')
  }
}

async function getIngredients({ req, res }) {
  const [rows] = await pool.query('SELECT * FROM ingredients')

  return res?.status(200).json(
    rows.map((row) => {
      return { id: row?.ingredients_id, name: row?.name }
    })
  )
}
