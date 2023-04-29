import styles from '../../styles/planningButtons.module.css'
import Router from 'next/router'
import { useState } from 'react'

export default function EditorButtons({ refs, planningData, setEditting }) {
  const handleBack = () => {
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
