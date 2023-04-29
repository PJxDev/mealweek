import styles from '@/styles/planning.module.css'
import PlanningCard from '../Cards/PlanningCard'
import Buttons from '../Buttons/EditorButtons'
import MyGallery from '../MyGallery/MyGallery'
import data from '../../examples/planning-data.json'
import { useEffect, useRef, useState } from 'react'

export default function Planning() {
  const [planningData, setPlanningData] = useState()
  const [adding, setAdding] = useState({ state: false })
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
  }, [])

  return (
    <section ref={planningRef} className={styles.container}>
      <article className={styles.planningContainer}>
        <header>
          <h2>Editor</h2>
        </header>
        <section className={styles.planningCards}>
          {planningData?.map((el) => {
            return (
              <PlanningCard
                id={el.id}
                isEditting={true}
                planningData={planningData}
                setPlanningData={setPlanningData}
                adding={adding}
                setAdding={setAdding}
              />
            )
          })}
        </section>
      </article>
      <article
        ref={listRef}
        id='list'
        className={adding.state ? styles.planningContainer : styles.hidden}
      >
        <div className={styles.shoppingListContainer}>
          <h2>My Gallery</h2>
          <MyGallery
            adding={adding}
            setAdding={setAdding}
            planningData={planningData}
            setPlanningData={setPlanningData}
          />
        </div>
      </article>
      <Buttons
        refs={{ planning: planningRef, list: listRef }}
        planningData={planningData}
        isEditting={true}
      />
    </section>
  )
}
