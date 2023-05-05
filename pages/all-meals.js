import Layout from './layout'
import styles from '../styles/index.module.css'
import AllMeals from '../components/AllMeals/AllMeals'

export default function PlanningEditor({ mealsData }) {
  return (
    <>
      <Layout>
        <main className={styles.main}>
          <h2>All Meals</h2>
          <AllMeals mealsData={mealsData} />
        </main>
      </Layout>
    </>
  )
}

export async function getServerSideProps(context) {
  try {
    const result = await fetch('http://localhost:3000/api/meals')
    const mealsData = await result.json()
    return {
      props: {
        mealsData
      }
    }
  } catch (error) {
    console.error(error)
    return {
      props: {}
    }
  }
}
