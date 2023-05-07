import Layout from './layout'
import styles from '../styles/index.module.css'
import AllMeals from '../components/AllMeals/AllMeals'
import { verify } from 'jsonwebtoken'
import useCookieData from '@/hooks/useCookieData'

export default function PlanningEditor({ mealsData, userData }) {
  useCookieData(userData)
  return (
    <>
      <Layout>
        <main className={styles.main}>
          <h2>All Meals</h2>
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
    const result = await fetch('http://localhost:3000/api/meals')
    const mealsData = await result.json()
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
