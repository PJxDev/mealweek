import Layout from './layout'
import styles from '../styles/index.module.css'
import MyGallery from '@/components/MyGallery/MyGallery'
import { verify } from 'jsonwebtoken'

export default function PlanningEditor({ data }) {
  return (
    <>
      <Layout>
        <main className={styles.main}>
          <h2>My Gallery</h2>
          <MyGallery data={data} />
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
        data
      }
    }
  } catch (error) {
    console.error(error)
    return {
      props: {}
    }
  }
}
