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
        <header>
          <h3>{day}</h3>
          {lunch !== '' || dinner !== '' ? (
            <button
              className={styles.crossButton}
              id={id}
              onClick={handleDelete}
            >
              ❌
            </button>
          ) : null}
        </header>
        <article>
          <header>
            <h4>Lunch</h4>
          </header>
          <section>
            {lunch === null || lunch === '' || lunch === undefined ? (
              <button id={id} className='lunch' onClick={handleAdd}>
                ➕
              </button>
            ) : null}
            <span>{lunch?.icon || ''}</span>
            <span>{lunch?.name || ''}</span>
          </section>
        </article>
        <article>
          <header>
            <h4>Dinner</h4>
          </header>
          <section>
            {dinner === null || dinner === '' || dinner === undefined ? (
              <button id={id} className='dinner' onClick={handleAdd}>
                ➕
              </button>
            ) : null}
            <span>{dinner?.icon || ''}</span>
            <span>{dinner?.name || ''}</span>
          </section>
        </article>
      </div>
    )
  } else {
    return (
      <div className={styles.container}>
        <header>
          <h3>{day}</h3>
        </header>
        <article>
          <header>
            <h4>Lunch</h4>
          </header>
          <section>
            <span>{lunch.icon || ''}</span>
            <span>{lunch.name || ''}</span>
          </section>
        </article>
        <article>
          <header>
            <h4>Dinner</h4>
          </header>
          <section>
            <span>{dinner?.icon || ''}</span>
            <span>{dinner?.name || ''}</span>
          </section>
        </article>
      </div>
    )
  }
}
