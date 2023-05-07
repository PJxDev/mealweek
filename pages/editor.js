import Layout from './layout'
import Editor from '../components/Editor/Editor'
import styles from '../styles/index.module.css'
import { verify } from 'jsonwebtoken'
import useCookieData from '@/hooks/useCookieData'
import axios from 'axios'

export default function PlanningEditor({ data, userData }) {
  useCookieData(userData)
  return (
    <>
      <Layout>
        <main className={styles.main}>
          <Editor data={data} />
        </main>
      </Layout>
    </>
  )
}

export async function getServerSideProps(context) {
  try {
    const { tkn } = context.req.cookies
    const userData = verify(tkn, process.env.PASS_SECRET)
    const result = await axios.post(`${process.env.DOMAIN}/api/my-gallery`, {
      userId: userData.id
    })

    const data = result.data
    return {
      props: {
        data,
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
