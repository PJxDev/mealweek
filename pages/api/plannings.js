import { pool } from '../../config/database'

export default async function handler(req, res) {
  if (req.method === 'POST' && req.body.planningJson) {
    return await savePlanning({ req, res })
  }
  if (req.method === 'POST') {
    return await getPlannings({ req, res })
  }
}

async function savePlanning({ req, res }) {
  const { authorId, planningJson } = req?.body
  try {
    await pool.query(
      'INSERT INTO plannings (user_id, plan, time ) VALUES (?, ?, NOW())',
      [authorId, planningJson]
    )

    return res?.status(200).json('Success saving the planning')
  } catch (error) {
    console.log(error)
    if (error.errno === 1062) {
      return res?.status(400).json('The planning exists already.')
    }
    return res?.status(403).json('There was a problem creating the ingredient.')
  }
}

async function getPlannings({ req, res }) {
  const { authorId } = req?.body
  try {
    const [rows] = await pool.query(
      'SELECT plan FROM plannings WHERE user_id = ? ORDER BY time',
      authorId
    )

    return res?.status(200).json(
      rows.flatMap((row) => {
        return row?.plan.planningData
      })
    )
  } catch (error) {
    console.log(error)
    return res?.status(403).json('There was a problem getting the planning.')
  }
}
