import styles from '../../styles/planningButtons.module.css'
import Router from 'next/router'
import dynamic from 'next/dynamic'
import { useState } from 'react'

export default function PlanningButtons({ refs, planningData, setEditting }) {
  const PDFButton = dynamic(() => import('./PDFButton.jsx'), { ssr: false })

  const handleEdit = () => {
    Router.push('/editor')
  }

  return (
    <div className={styles.container}>
      <button className={styles.editButton} onClick={handleEdit}>
        Go Editor
      </button>
      <PDFButton refs={refs} data={planningData} />
    </div>
  )
}
