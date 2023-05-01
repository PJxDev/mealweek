import { useContext } from 'react'
import styles from '../../styles/myGallery.module.css'
import { PlanningContext } from '../../context/PlanningContext'
import data from '@/examples/my-gallery.json'
import Buttons from '../Buttons/MyGalleryButtons'

export default function MyGallery() {
  const { planningData, setPlanningData, adding, setAdding } =
    useContext(PlanningContext)

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
      <Buttons />
    </div>
  )
}
