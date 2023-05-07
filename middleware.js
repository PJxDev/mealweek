import { NextResponse } from 'next/server'
import { jwtVerify } from 'jose'

export async function middleware(req) {
  console.log(req.nextUrl.pathname)
  const tkn = req.cookies.get('tkn')
  if (
    tkn === undefined &&
    req.nextUrl.pathname !== '/' &&
    req.nextUrl.pathname !== '/login' &&
    req.nextUrl.pathname !== '/register'
  ) {
    return NextResponse.redirect(new URL('/login', req.url))
  }
  try {
    const { payload } = await jwtVerify(
      tkn,
      new TextEncoder().encode(process.env.PASS_SECRET)
    )
    if (
      req.nextUrl.pathname === '/' ||
      req.nextUrl.pathname === '/login' ||
      req.nextUrl.pathname === '/register'
    ) {
      return NextResponse.redirect(new URL('/planning', req.url))
    } else {
      return NextResponse.next()
    }
  } catch (error) {
    console.error(error)
    if (
      req.nextUrl.pathname === '/' ||
      req.nextUrl.pathname === '/login' ||
      req.nextUrl.pathname === '/register'
    ) {
      return NextResponse.next()
    } else {
      return NextResponse.redirect(new URL('/login', req.url))
    }
  }
}

export const config = {
  matcher: [
    '/',
    '/my-plannings',
    '/my-gallery',
    '/editor',
    '/all-meals',
    '/meals',
    '/planning',
    '/login',
    '/register'
  ]
}
