import PlanningContext from '@/context/PlanningContext'
import styles from '@/styles/planningCard.module.css'
import { useContext } from 'react'

export default function PlanningCard({ idx: id, data, isEditting }) {
  const { day, lunch, dinner } = data || ''
  const {
    planningData,
    setPlanningData,
    adding,
    setAdding,
    authorId,
    setAuthorId,
    favs,
    setFavs,
    isLogged,
    setIsLogged
  } = useContext(PlanningContext)

  const handleDelete = (e) => {
    const value = [...planningData]
    value[e.target.id].lunch = ''
    value[e.target.id].dinner = ''
    setPlanningData([...value])
  }

  const handleAdd = (e) => {
    const value = {
      state: true,
      target: e.target.className,
      target_id: e.target.id
    }
    setAdding(value)
  }

  if (isEditting) {
    return (
      <div className={styles.container}>
        {lunch !== '' || dinner !== '' ? (
          <p id={id} onClick={handleDelete}>
            ❌
          </p>
        ) : null}
        <h3>{day}</h3>
        <section>
          <h4>Lunch</h4>
          {lunch === null || lunch === '' || lunch === undefined ? (
            <button id={id} className='lunch' onClick={handleAdd}>
              ➕
            </button>
          ) : null}
          <span>{lunch?.icon || ''}</span>
          <span>{lunch?.name || ''}</span>
        </section>
        <section>
          <h4>Dinner</h4>
          {dinner === null || dinner === '' || dinner === undefined ? (
            <button id={id} className='dinner' onClick={handleAdd}>
              ➕
            </button>
          ) : null}
          <span>{dinner?.icon || ''}</span>
          <span>{dinner?.name || ''}</span>
        </section>
      </div>
    )
  } else {
    return (
      <div className={styles.container}>
        <h3>{day}</h3>
        <section>
          <h4>Lunch</h4>
          <span>{lunch.icon || ''}</span>
          <span>{lunch.name || ''}</span>
        </section>
        <section>
          <h4>Dinner</h4>
          <span>{dinner?.icon || ''}</span>
          <span>{dinner?.name || ''}</span>
        </section>
      </div>
    )
  }
}
