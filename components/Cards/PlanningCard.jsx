import styles from '@/styles/planningCard.module.css'
import { useState } from 'react'

const data = {
  id: 1,
  day: 'Monday',
  lunch: {
    icon: '😁',
    name: 'not a food'
  },
  dinner: {
    icon: '😋',
    name: 'neither a food'
  }
}

const DAYS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
]

export default function PlanningCard({
  id,
  isEditting,
  planningData,
  setPlanningData,
  adding,
  setAdding
}) {
  const handleDelete = (e) => {
    const value = [...planningData]
    value[e.target.id].lunch = ''
    value[e.target.id].dinner = ''
    setPlanningData(value)
  }
  const handleAdd = (e) => {
    setAdding({
      state: true,
      target: e.target.className,
      target_id: e.target.id
    })
  }
  return (
    <div className={styles.container}>
      {isEditting ? (
        <p id={id - 1} onClick={handleDelete}>
          ❌
        </p>
      ) : null}
      <h3>{DAYS[id - 1]}</h3>
      <section>
        <h4>Lunch</h4>
        {isEditting &&
        (planningData[id - 1]?.lunch === null ||
          planningData[id - 1]?.lunch === '' ||
          planningData[id - 1]?.lunch === undefined) ? (
          <p id={id - 1} className='lunch' onClick={handleAdd}>
            ➕
          </p>
        ) : null}
        <span>{planningData[id - 1]?.lunch.icon || ''}</span>
        <span>{planningData[id - 1]?.lunch.name || ''}</span>
      </section>
      <section>
        <h4>Dinner</h4>
        {isEditting &&
        (planningData[id - 1]?.dinner === null ||
          planningData[id - 1]?.dinner === '' ||
          planningData[id - 1]?.dinner === undefined) ? (
          <p id={id - 1} className='dinner' onClick={handleAdd}>
            ➕
          </p>
        ) : null}
        <span>{planningData[id - 1]?.dinner?.icon || ''}</span>
        <span>{planningData[id - 1]?.dinner?.name || ''}</span>
      </section>
    </div>
  )
}
