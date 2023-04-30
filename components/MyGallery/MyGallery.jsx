import { useContext } from 'react'
import styles from '../../styles/myGallery.module.css'
import { PlanningContext } from '../../context/PlanningContext'

const data = [
  {
    id: 1,
    name: 'Pollo con patatas',
    icon: '🍗',
    composition: 'carne'
  },
  {
    id: 2,
    name: 'Ensalada César',
    icon: '🥗',
    composition: 'verduras, huevo, queso'
  },
  {
    id: 3,
    name: 'Solomillo de vaca con verduras salteadas',
    icon: '🥩',
    composition: 'carne, verduras'
  },
  {
    id: 4,
    name: 'Crema de verduras',
    icon: '🥣',
    composition: 'verduras, lactosa'
  },
  {
    id: 5,
    name: 'Huevos fritos con pisto',
    icon: '🍳',
    composition: 'huevo, verduras'
  },
  {
    id: 6,
    name: 'Potaje de garbanzos',
    icon: '🍲',
    composition: 'carne, verduras'
  },
  {
    id: 7,
    name: 'Pizza carbonara',
    icon: '🍕',
    composition: 'gluten, carne, lactosa'
  },
  {
    id: 8,
    name: 'Guisantes con jamón',
    icon: '🍽',
    composition: 'verduras, carne'
  }
]

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
    </div>
  )
}
