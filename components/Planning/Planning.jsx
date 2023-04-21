import styles from '@/styles/planning.module.css'
import PlanningCard from './Cards/PlanningCard'
import ShoppingList from './ShoppingList/ShoppingList'
import data from '../../examples/planning-data.json'

export default function Planning() {
  return (
    <section className={styles.container}>
      <article className={styles.planningContainer}>
        <header>
          <h2>Planning</h2>
        </header>
        <section className={styles.planningCards}>
          {data &&
            data.map((el) => {
              return (
                <PlanningCard
                  day={el.day}
                  lunch={el.lunch}
                  dinner={el.dinner}
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
        <div className={styles.buttonContainer}>
          <h2>Buttons</h2>
        </div>
      </article>
    </section>
  )
}
