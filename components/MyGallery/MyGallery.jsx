import { useContext } from 'react'
import styles from '../../styles/myGallery.module.css'
import { PlanningContext } from '../../context/PlanningContext'
import data from '@/examples/my-gallery.json'
import Buttons from '../Buttons/MyGalleryButtons'
import axios from 'axios'

export default function MyGallery() {
  const {
    planningData,
    setPlanningData,
    adding,
    setAdding,
    isLogged,
    setIsLogged
  } = useContext(PlanningContext)

  const handleMealSelect = (e) => {
    if (!adding.state) return

    const value = [...planningData]
    if (adding.target === 'lunch') {
      value[adding.target_id].lunch = {
        icon: data[e.currentTarget.id - 1].icon,
        name: data[e.currentTarget.id - 1].name
      }
    }
    if (adding.target === 'dinner') {
      value[adding.target_id].dinner = {
        icon: data[e.currentTarget.id - 1].icon,
        name: data[e.currentTarget.id - 1].name
      }
    }

    setPlanningData([...value])
    setAdding({ state: false })
  }

  return (
    <div className={styles.container}>
      <section>
        {data &&
          data.map((meal) => {
            return (
              <article key={meal.id} className={styles.mealBox}>
                <h3>{meal.name}</h3>
                <span>{meal.icon}</span>
                <h6>{meal.composition}</h6>
                {adding.state && (
                  <button id={meal.id} onClick={handleMealSelect}>
                    ⏪
                  </button>
                )}
              </article>
            )
          })}
      </section>
      <Buttons />
    </div>
  )
}
