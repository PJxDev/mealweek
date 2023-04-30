import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import React from 'react'

//TODO: FOOTER

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
