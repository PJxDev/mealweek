import { useContext } from 'react'
import styles from '../../styles/myGallery.module.css'
import { PlanningContext } from '../../context/PlanningContext'
import Router from 'next/router'

export default function AllMeals({ mealsData }) {
  const {
    planningData,
    setPlanningData,
    adding,
    setAdding,
    isLogged,
    setIsLogged
  } = useContext(PlanningContext)

  const handleClick = (e) => {
    const id = e.target.id
    Router.push(`/${id}/meals`)
  }

  return (
    <div className={styles.container}>
      <section>
        {mealsData &&
          mealsData.map((meal) => {
            return (
              <article key={meal.id} className={styles.mealBox}>
                <h2>{meal.name}</h2>
                <span>{meal.icon}</span>
                <h4>{meal.composition}</h4>
                <button
                  style={{ fontSize: '1rem' }}
                  id={meal.id}
                  onClick={handleClick}
                >
                  👁
                </button>
              </article>
            )
          })}
      </section>
    </div>
  )
}
