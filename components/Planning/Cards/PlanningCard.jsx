import styles from '@/styles/planningCard.module.css'

export default function PlanningCard({ day, lunch, dinner, isEditting }) {
  return (
    <div className={styles.container}>
      {isEditting ? <p>❌</p> : <p></p>}
      <h3>{day}</h3>
      <section>
        <h4>Lunch</h4>
        <span>{lunch.icon}</span>
        <span>{lunch.name}</span>
      </section>
      <section>
        <h4>Dinner</h4>
        <span>{dinner.icon}</span>
        <span>{dinner.name}</span>
      </section>
    </div>
  )
}
