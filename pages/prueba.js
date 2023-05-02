import Layout from './layout'
import styles from '../styles/index.module.css'

export default function Login() {
  const handleChange = (e) => {
    console.log(e.target.value)
  }
  return (
    <>
      <Layout>
        <main className={styles.main}>
          <form>
            {' '}
            <label> 😀</label>
            <input
              type='radio'
              name='icon'
              value='😀'
              onChange={handleChange}
            />
            <label>😁</label>
            <input
              type='radio'
              name='icon'
              value='😁'
              onChange={handleChange}
            />
            <label>😂</label>
            <input
              type='radio'
              name='icon'
              value='😂'
              onChange={handleChange}
            />
          </form>
        </main>
      </Layout>
    </>
  )
}
