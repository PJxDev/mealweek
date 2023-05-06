import { NextResponse } from 'next/server'
import { jwtVerify } from 'jose'

export async function middleware(req) {
  const tkn = req.cookies.get('tkn')

  if (tkn === undefined) {
    return NextResponse.redirect(new URL('/login', req.url))
  }
  try {
    const { payload } = await jwtVerify(
      tkn,
      new TextEncoder().encode(process.env.PASS_SECRET)
    )
    console.log(payload)

    return NextResponse.next()
  } catch (error) {
    console.error(error)
    return NextResponse.redirect(new URL('/login', req.url))
  }
}

export const config = {
  matcher: ['/my-plannings', '/my-gallery', '/editor', '/all-meals', '/meals']
}
