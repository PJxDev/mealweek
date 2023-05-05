import Layout from '../layout'
import styles from '../../styles/index.module.css'

export default function PlanningEditor({ mealData }) {
  return (
    <>
      <Layout>
        <main className={styles.main}>
          {mealData && (
            <article className={styles.container}>
              <h1>{mealData.name}</h1>
              <span>{mealData.icon}</span>
              <p>{mealData.description}</p>
              <h4>{mealData.composition}</h4>
              <ul>
                {mealData.ingredients &&
                  mealData.ingredients.map((ingredient, idx) => {
                    return (
                      <li
                        key={idx}
                      >{`${ingredient.name} ${ingredient.quantity}${ingredient.type}`}</li>
                    )
                  })}
              </ul>
            </article>
          )}
        </main>
      </Layout>
    </>
  )
}

export async function getServerSideProps(context) {
  const mealId = context.query.id
  try {
    const result = await fetch(`http://localhost:3000/api/${mealId}/meals`)
    const mealData = await result.json()
    return {
      props: {
        mealData
      }
    }
  } catch (error) {
    console.error(error)
    return {
      props: {}
    }
  }
}
