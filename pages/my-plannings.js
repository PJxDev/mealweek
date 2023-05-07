import Layout from './layout'
import styles from '../styles/index.module.css'
import ListPlannings from '@/components/ListPlannings/ListPlannings'
import { verify } from 'jsonwebtoken'
import useCookieData from '@/hooks/useCookieData'

export default function MyPlannings({ myPlannings, userData }) {
  useCookieData(userData)
  return (
    <>
      <Layout>
        <main className={styles.main}>
          <h2>My Plannings</h2>
          <ListPlannings myPlannings={myPlannings} />
        </main>
      </Layout>
    </>
  )
}

export async function getServerSideProps(context) {
  try {
    const { tkn } = context.req.cookies
    const userData = verify(tkn, process.env.PASS_SECRET)
    console.log(userData.id)
    const result = await fetch(`${process.env.DOMAIN}/api/plannings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ authorId: userData.id })
    })
    const myPlannings = await result.json()

    return {
      props: {
        myPlannings,
        userData
      }
    }
  } catch (error) {
    console.error(error)
    return {
      props: {}
    }
  }
}
