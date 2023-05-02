import styles from '../../styles/buttons.module.css'
import Router from 'next/router'
import { useContext } from 'react'
import { PlanningContext } from '../../context/PlanningContext'

export default function EditorButtons({ refs }) {
  const {
    planningData,
    setPlanningData,
    adding,
    setAdding,
    isLogged,
    setIsLogged
  } = useContext(PlanningContext)
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
