import Layout from './layout'
import Planning from '@/components/Planning/Planning'
import styles from '../styles/planningPage.module.css'
import { verify } from 'jsonwebtoken'
import useCookieData from '@/hooks/useCookieData'

export default function PlanningPage({ userData }) {
  useCookieData(userData)
  return (
    <>
      <Layout>
        <main className={styles.main}>
          <Planning />
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
