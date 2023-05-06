import FormLogin from '../components/Forms/FormLogin'
import Layout from './layout'
import styles from '../styles/index.module.css'
import { verify } from 'jsonwebtoken'
import useCookieData from '@/hooks/useCookieData'

export default function Login({ userData }) {
  useCookieData(userData)
  return (
    <>
      <Layout>
        <main className={styles.main}>
          <FormLogin />
        </main>
      </Layout>
    </>
  )
}
export async function getServerSideProps(context) {
  const { tkn } = context.req.cookies
  if (tkn) {
    const userData = verify(tkn, process.env.PASS_SECRET)
    console.log(userData.id)
    return { props: { userData } }
  }
  return { props: {} }
}
