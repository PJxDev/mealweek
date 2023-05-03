import Layout from './layout'
import styles from '../styles/index.module.css'

export default function Login({ ingredients }) {
  return (
    <>
      <Layout>
        <main className={styles.main}></main>
      </Layout>
    </>
  )
}

// export async function getServerSideProps() {
//   try {
//     const result = await fetch('http://localhost:3000/api/ingredients')
//     const ingredients = await result.json()
//     return {
//       props: {
//         ingredients
//       }
//     }
//   } catch (error) {
//     console.error(error)
//     return {
//       props: {}
//     }
//   }
// }
