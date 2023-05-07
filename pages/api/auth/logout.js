import { verify } from 'jsonwebtoken'
import { serialize } from 'cookie'

export default async function handler(req, res) {
  const { tkn } = req.cookies
  try {
    verify(tkn, process.env.PASS_SECRET)
    const serialized = serialize('tkn', null, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 0,
      path: '/'
    })
    res.setHeader('Set-Cookie', serialized)
    res.status(200).json('logout succesfully')
  } catch (error) {}
  if (!tkn) return res.status(401).json({ error: 'no token' })
}
