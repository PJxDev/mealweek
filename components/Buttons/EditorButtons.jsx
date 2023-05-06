import styles from '../../styles/buttons.module.css'
import Router from 'next/router'

export default function EditorButtons() {
  const handleBack = () => {
    Router.push('/')
  }

  return (
    <div className={styles.container}>
      <button className={styles.blueButton} onClick={handleBack}>
        Go back to Planning
      </button>
    </div>
  )
}
