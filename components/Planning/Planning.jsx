import styles from '@/styles/planning.module.css'
import PlanningCard from '../Cards/PlanningCard'
import ShoppingList from './ShoppingList/ShoppingList'
import Buttons from '../Buttons/PlanningButtons'
// import data from '../../examples/planning-data.json'
import { useEffect, useRef, useState } from 'react'

export default function Planning() {
  const [planningData, setPlanningData] = useState()
  const planningRef = useRef()
  const listRef = useRef()

  const initialData = [
    {
      id: 1,
      day: 'Monday',
      lunch: '',
      dinner: ''
    },
    {
      id: 2,
      day: 'Tuesday',
      lunch: '',
      dinner: ''
    },
    {
      id: 3,
      day: 'Wednesday',
      lunch: '',
      dinner: ''
    },
    {
      id: 4,
      day: 'Thursday',
      lunch: '',
      dinner: ''
    },
    {
      id: 5,
      day: 'Friday',
      lunch: '',
      dinner: ''
    },
    {
      id: 6,
      day: 'Saturday',
      lunch: '',
      dinner: ''
    },
    {
      id: 7,
      day: 'Sunday',
      lunch: '',
      dinner: ''
    }
  ]

  useEffect(() => {
    planningData ?? setPlanningData(initialData)
    console.log(planningData)
  }, [])

  return (
    <section ref={planningRef} className={styles.container}>
      <article className={styles.planningContainer}>
        <header>
          <h2>Planning</h2>
        </header>
        <section className={styles.planningCards}>
          {planningData?.map((el) => {
            return (
              <PlanningCard
                key={el.id}
                id={el.id}
                isEditting={false}
                planningData={planningData}
                setPlanningData={setPlanningData}
              />
            )
          })}
        </section>
      </article>
      <article ref={listRef} id='list' className={styles.planningContainer}>
        <div className={styles.shoppingListContainer}>
          <h2>List</h2>
          <ShoppingList />
        </div>
      </article>
      <Buttons
        refs={{ planning: planningRef, list: listRef }}
        planningData={planningData}
        setEditting={false}
      />
    </section>
  )
}
