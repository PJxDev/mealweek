import styles from '@/styles/planning.module.css'
import PlanningCard from './Cards/PlanningCard'
import ShoppingList from './ShoppingList/ShoppingList'
import data from '../../examples/planning-data.json'
import { useState } from 'react'

export default function Planning() {
  const [isEditting, setEditting] = useState(false)

  const handleEdit = () => {
    if (isEditting) {
      setEditting(false)
      return
    }
    setEditting(true)
  }

  const handleDownload = () => {}

  return (
    <section className={styles.container}>
      <article className={styles.planningContainer}>
        <header>
          <h2>Planning</h2>
        </header>
        <section id='planning' className={styles.planningCards}>
          {data &&
            data.map((el) => {
              return (
                <PlanningCard
                  day={el.day}
                  lunch={el.lunch}
                  dinner={el.dinner}
                  isEditting={isEditting}
                />
              )
            })}
        </section>
      </article>
      <article className={styles.planningContainer}>
        <div className={styles.shoppingListContainer}>
          <h2>List</h2>
          <ShoppingList />
        </div>
      </article>
      <div className={styles.buttonContainer}>
        <button onClick={handleEdit}>Editar</button>
        <button onClick={handleDownload}>Descargar</button>
      </div>
    </section>
  )
}
