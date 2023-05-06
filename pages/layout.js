import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import { verify } from 'jsonwebtoken'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
