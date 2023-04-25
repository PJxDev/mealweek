import styles from '@/styles/planningCard.module.css'

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
  setPlanningData
}) {
  const { day, lunch, dinner } = planningData[id]
  const handleDelete = (e) => {
    const value = [...planningData]
    value[e.target.id - 1].lunch = ''
    value[e.target.id - 1].dinner = ''
    setPlanningData(value)
  }
  const handleAdd = (e) => {
    const value = [...planningData]
    if (e.target.className === 'lunch') {
      value[e.target.id - 1].lunch = lunch
    }
    if (e.target.className === 'dinner') {
      value[e.target.id - 1].dinner = dinner
    }

    setPlanningData(value)
  }
  return (
    <div className={styles.container}>
      {isEditting ? (
        <p id={id} onClick={handleDelete}>
          ❌
        </p>
      ) : null}
      <h3>{DAYS[id - 1]}</h3>
      <section>
        <h4>Lunch</h4>
        {isEditting &&
        (lunch === null || lunch === '' || lunch === undefined) ? (
          <p id={id} className='lunch' onClick={handleAdd}>
            ➕
          </p>
        ) : null}
        <span>{lunch.icon || ''}</span>
        <span>{lunch.name || ''}</span>
      </section>
      <section>
        <h4>Dinner</h4>
        {isEditting &&
        (dinner === null || dinner === '' || dinner === undefined) ? (
          <p id={id} className='dinner' onClick={handleAdd}>
            ➕
          </p>
        ) : null}
        <span>{dinner?.icon || ''}</span>
        <span>{dinner?.name || ''}</span>
      </section>
    </div>
  )
}
