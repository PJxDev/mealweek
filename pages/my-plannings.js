import Layout from './layout'
import styles from '../styles/index.module.css'
import ListPlannings from '@/components/ListPlannings/ListPlannings'
import { verify } from 'jsonwebtoken'
import useCookieData from '@/hooks/useCookieData'
import axios from 'axios'

export default function MyPlannings({ myPlannings, userData }) {
  useCookieData(userData)
  return (
    <>
      <Layout>
        <main className={styles.main}>
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
    const result = await axios.post(`${process.env.DOMAIN}/api/plannings`, {
      authorId: userData.id
    })

    const myPlannings = result.data

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
