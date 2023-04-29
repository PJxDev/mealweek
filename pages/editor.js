import Layout from './layout'
import Editor from '../components/Editor/Editor'
import styles from '../styles/index.module.css'

export default function Home() {
  return (
    <>
      <Layout>
        <main className={styles.main}>
          <Editor />
        </main>
      </Layout>
    </>
  )
}
