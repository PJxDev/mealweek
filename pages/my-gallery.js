import Layout from './layout'
import styles from '../styles/index.module.css'
import MyGallery from '@/components/MyGallery/MyGallery'
import { verify } from 'jsonwebtoken'
import useCookieData from '@/hooks/useCookieData'
import axios from 'axios'

export default function MyGalleryPage({ data, ingredients, userData }) {
  useCookieData(userData)
  return (
    <>
      <Layout>
        <main className={styles.main}>
          <MyGallery
            className={styles.myGallery}
            data={data}
            ingredients={ingredients}
          />
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

    const result2 = await axios(`${process.env.DOMAIN}/api/ingredients`)
    const ingredients = await result2.data
    return {
      props: {
        data,
        ingredients,
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
