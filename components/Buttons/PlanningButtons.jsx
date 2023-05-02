import styles from '../../styles/buttons.module.css'
import Router from 'next/router'
import dynamic from 'next/dynamic'
import { useContext } from 'react'
import { PlanningContext } from '../../context/PlanningContext'

export default function PlanningButtons({ refs }) {
  const {
    planningData,
    setPlanningData,
    adding,
    setAdding,
    isLogged,
    setIsLogged
  } = useContext(PlanningContext)
  const PDFButton = dynamic(() => import('./PDFButton.jsx'), { ssr: false })

  const handleEdit = () => {
    Router.push('/editor')
  }

  return (
    <div className={styles.container}>
      <button className={styles.blueButton} onClick={handleEdit}>
        Go Editor
      </button>
      <PDFButton refs={refs} data={planningData} />
    </div>
  )
}
