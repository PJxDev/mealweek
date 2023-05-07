import FormRegister from '../components/Forms/FormRegister'
import Layout from './layout'
import styles from '../styles/index.module.css'
import useCookieData from '@/hooks/useCookieData'
import { verify } from 'jsonwebtoken'

export default function Login({ userData }) {
  useCookieData(userData)
  return (
    <>
      <Layout>
        <main className={styles.main}>
          <FormRegister />
        </main>
      </Layout>
    </>
  )
}
export async function getServerSideProps(context) {
  const { tkn } = context.req.cookies
  if (tkn) {
    const userData = verify(tkn, process.env.PASS_SECRET)
    return { props: { userData } }
  }
  return { props: {} }
}
