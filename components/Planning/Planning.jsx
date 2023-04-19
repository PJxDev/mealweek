import styles from '@/styles/planning.module.css'
import PlanningCard from './Cards/PlanningCard'

const data = [
  {
    day: 'Monday',
    lunch: {
      icon: '🍕',
      name: 'Pizza BBQ'
    },
    dinner: {
      icon: '🥩',
      name: 'Ternera con Verduras'
    }
  },
  {
    day: 'Tuesday',
    lunch: {
      icon: '🍔',
      name: 'Hamburguesa'
    },
    dinner: {
      icon: '🥩',
      name: 'Ternera con Verduras'
    }
  },
  {
    day: 'Wednesday',
    lunch: {
      icon: '🍕',
      name: 'Pizza BBQ'
    },
    dinner: {
      icon: '🥩',
      name: 'Ternera con Verduras'
    }
  },
  {
    day: 'Thursday',
    lunch: {
      icon: '🍕',
      name: 'Pizza BBQ'
    },
    dinner: {
      icon: '🥩',
      name: 'Ternera con Verduras'
    }
  },
  {
    day: 'Friday',
    lunch: {
      icon: '🍕',
      name: 'Pizza BBQ'
    },
    dinner: {
      icon: '🥩',
      name: 'Ternera con Verduras'
    }
  },
  {
    day: 'Saturday',
    lunch: {
      icon: '🍕',
      name: 'Pizza BBQ'
    },
    dinner: {
      icon: '🥩',
      name: 'Ternera con Verduras'
    }
  },
  {
    day: 'Sunday',
    lunch: {
      icon: '🍕',
      name: 'Pizza BBQ'
    },
    dinner: {
      icon: '🥩',
      name: 'Ternera con Verduras'
    }
  }
]

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
        </div>
        <div className={styles.buttonContainer}>
          <h2>Buttons</h2>
        </div>
      </article>
    </section>
  )
}
