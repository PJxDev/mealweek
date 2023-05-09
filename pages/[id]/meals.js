import Layout from '../layout'
import styles from '@/styles/meals.module.css'
import useCookieData from '@/hooks/useCookieData'
import { verify } from 'jsonwebtoken'
import axios from 'axios'

export default function PlanningEditor({ mealData, userData }) {
  useCookieData(userData)
  return (
    <>
      <Layout>
        <main className={styles.main}>
          {mealData && (
            <article className={styles.container}>
              <header>
                <h1>{mealData.name}</h1>
                <span>{mealData.icon}</span>
              </header>
              <section className={styles.section}>
                <p>{mealData.description}</p>
                <div>
                  <h4>Composición y/o alérgenos:</h4>
                  <h4>{mealData.composition}</h4>
                </div>
                <div className={styles.list}>
                  <h4>Lista de la compra</h4>
                  <ul>
                    {mealData.ingredients &&
                      mealData.ingredients.map((ingredient, idx) => {
                        return (
                          <li
                            key={idx}
                          >{`${ingredient.name} ${ingredient.quantity} ${ingredient.type}`}</li>
                        )
                      })}
                  </ul>
                </div>
              </section>
            </article>
          )}
        </main>
      </Layout>
    </>
  )
}

export async function getServerSideProps(context) {
  const { tkn } = context.req.cookies
  let userData
  if (tkn) {
    userData = verify(tkn, process.env.PASS_SECRET)
  }
  const mealId = context.query.id
  try {
    const result = await axios.get(`${process.env.DOMAIN}/api/${mealId}/meals`)
    const mealData = result.data
    return {
      props: {
        mealData,
        userData
      }
    }
  } catch (error) {
    console.error(error)
    return {
      props: { userData }
    }
  }
}
