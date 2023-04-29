import FormLogin from '../components/Forms/FormLogin'
import Layout from './layout'
import styles from '../styles/index.module.css'

export default function Login() {
  return (
    <>
      <Layout>
        <main className={styles.main}>
          <FormLogin />
        </main>
      </Layout>
    </>
  )
}
