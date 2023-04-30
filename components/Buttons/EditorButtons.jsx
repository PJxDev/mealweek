import axios from 'axios'
import styles from '../../styles/planningButtons.module.css'
import Router from 'next/router'
import { useContext } from 'react'
import { PlanningContext } from '../../context/PlanningContext'

export default function EditorButtons({ refs }) {
  const { planningData, setPlanningData, adding, setAdding } =
    useContext(PlanningContext)
  const handleBack = () => {
    console.log(planningData)
    // await axios.post('api/setPlanningData', planningData)
    Router.push('/')
  }

  return (
    <div className={styles.container}>
      <button className={styles.editButton} onClick={handleBack}>
        Go back to Planning
      </button>
    </div>
  )
}
