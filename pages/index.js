import Head from 'next/head'
import Layout from './layout'
import styles from '../styles/index.module.css'
import { verify } from 'jsonwebtoken'
import useCookieData from '@/hooks/useCookieData'

export default function Home({ userData }) {
  useCookieData(userData)
  return (
    <>
      <Head>
        <title>MealWeek</title>
        <meta
          name='description'
          content='A weeky planner manager that can get you a shopping list as well.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <main className={styles.main}>
          <h1>LANDING</h1>
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
