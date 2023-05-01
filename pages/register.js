import FormRegister from '../components/Forms/FormRegister'
import Layout from './layout'
import styles from '../styles/index.module.css'

export default function Login() {
  return (
    <>
      <Layout>
        <main className={styles.main}>
          <FormRegister />
        </main>
      </Layout>
    </>
  )
}
