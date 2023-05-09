import Layout from './layout'
import styles from '../styles/index.module.css'
import AllMeals from '../components/AllMeals/AllMeals'
import { verify } from 'jsonwebtoken'
import useCookieData from '@/hooks/useCookieData'
import axios from 'axios'

export default function PlanningEditor({ mealsData, userData }) {
  useCookieData(userData)
  return (
    <>
      <Layout>
        <main className={styles.main}>
          <AllMeals mealsData={mealsData} />
        </main>
      </Layout>
    </>
  )
}

export async function getServerSideProps(context) {
  const { tkn } = context.req.cookies
  let userData
  if (tkn) {
    userData = verify(tkn, process.env.PASS_SECRET)
  }
  try {
    const result = await axios.get(`${process.env.DOMAIN}/api/meals`)
    const mealsData = result.data
    return {
      props: {
        mealsData,
        userData
      }
    }
  } catch (error) {
    console.error(error)
    return {
      props: { userData }
    }
  }
}
