import Layout from './layout'
import styles from '../styles/index.module.css'
import { serialize } from 'cookie'
import axios from 'axios'
import { raw } from 'mysql2'

export default function Login({ data }) {
  return (
    <>
      <Layout>
        <main className={styles.main}>
          <pre>{data}</pre>
        </main>
      </Layout>
    </>
  )
}

export async function getServerSideProps(req, res) {
  const data = await fetch('http://localhost:3000/api/my-gallery')

  const x = data

  console.log(x)
  return {
    props: {
      data: data
    }
  }
}
