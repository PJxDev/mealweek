import axios from 'axios'
import styles from '../../styles/planningButtons.module.css'
import Router from 'next/router'
import { useState } from 'react'

export default function EditorButtons({ refs, planningData, setEditting }) {
  const handleBack = () => {
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
