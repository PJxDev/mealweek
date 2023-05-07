import { pool } from '@/config/database'
import { verify } from 'jsonwebtoken'

export default async function handler(req, res) {
  if (req.method === 'DELETE') {
    return await deletePlan({ req, res })
  }
}

async function deletePlan({ req, res }) {
  try {
    const planId = req.query.id

    const [result] = await pool.query(
      'DELETE FROM plannings WHERE planning_id=?',
      planId
    )
    return res?.status(200).json('Success deleting the planning')
  } catch (error) {
    console.error(error)
    return res?.status(403).json(error.message)
  }
}
