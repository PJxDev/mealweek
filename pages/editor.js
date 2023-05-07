import Layout from './layout'
import Editor from '../components/Editor/Editor'
import styles from '../styles/index.module.css'
import { verify } from 'jsonwebtoken'
import useCookieData from '@/hooks/useCookieData'

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
    console.log(userData.id)
    const result = await fetch('http://localhost:3000/api/my-gallery', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userId: userData.id })
    })
    const data = await result.json()
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
