import styles from '@/styles/planning.module.css'

export default function Planning() {
  return (
    <section className={styles.container}>
      <article className={styles.planningContainer}>
        <header>
          <h2>Planning</h2>
        </header>
        <section className={styles.planningCards}>
          <div className={styles.planningCard}>
            <h3>Monday</h3>
            <section>
              <h4>Almuerzo</h4>
              <span>🍕</span>
              <span>Pizza Carbonara</span>
            </section>
            <section>
              <h4>Cena</h4>
              <span>🥗</span>
              <span>Ensalada Cesar</span>
            </section>
          </div>
          <div className={styles.planningCard}>
            <h3>Tuesday</h3>
            <section>
              <h4>Almuerzo</h4>
              <span>🍕</span>
              <span>Pizza Carbonara</span>
            </section>
            <section>
              <h4>Cena</h4>
              <span>🥗</span>
              <span>Ensalada Cesar</span>
            </section>
          </div>
          <div className={styles.planningCard}>
            <h3>Wednesday</h3>
            <section>
              <h4>Almuerzo</h4>
              <span>🍕</span>
              <span>Pizza Carbonara</span>
            </section>
            <section>
              <h4>Cena</h4>
              <span>🥗</span>
              <span>Ensalada Cesar</span>
            </section>
          </div>
          <div className={styles.planningCard}>
            <h3>Thursday</h3>
            <section>
              <h4>Almuerzo</h4>
              <span>🍕</span>
              <span>Pizza Carbonara</span>
            </section>
            <section>
              <h4>Cena</h4>
              <span>🥗</span>
              <span>Ensalada Cesar</span>
            </section>
          </div>
          <div className={styles.planningCard}>
            <h3>Friday</h3>
            <section>
              <h4>Almuerzo</h4>
              <span>🍕</span>
              <span>Pizza Carbonara</span>
            </section>
            <section>
              <h4>Cena</h4>
              <span>🥗</span>
              <span>Ensalada Cesar</span>
            </section>
          </div>
          <div className={styles.planningCard}>
            <h3>Saturday</h3>
            <section>
              <h4>Almuerzo</h4>
              <span>🍕</span>
              <span>Pizza Carbonara</span>
            </section>
            <section>
              <h4>Cena</h4>
              <span>🥗</span>
              <span>Ensalada Cesar</span>
            </section>
          </div>
          <div className={styles.planningCard}>
            <h3>Sunday</h3>
            <section>
              <h4>Almuerzo</h4>
              <span>🍕</span>
              <span>Pizza Carbonara</span>
            </section>
            <section>
              <h4>Cena</h4>
              <span>🥗</span>
              <span>Ensalada Cesar</span>
            </section>
          </div>
        </section>
      </article>
      <article className={styles.planningContainer}>
        <div className={styles.shoppingListContainer}>
          <h2>List</h2>
        </div>
      </article>
      <article className={styles.planningContainer}>
        <div className={styles.buttonContainer}>
          <h2>Buttons</h2>
        </div>
      </article>
    </section>
  )
}
