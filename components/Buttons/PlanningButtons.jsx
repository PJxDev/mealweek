import { useContext } from 'react'
import PlanningContext from '@/context/PlanningContext'
import Router from 'next/router'
import dynamic from 'next/dynamic'
import styles from '../../styles/buttons.module.css'
import axios from 'axios'
import { useReactToPrint } from 'react-to-print'

export default function PlanningButtons({ refs }) {
  const {
    planningData,
    setPlanningData,
    adding,
    setAdding,
    authorId,
    setAuthorId,
    favs,
    setFavs,
    isLogged,
    setIsLogged
  } = useContext(PlanningContext)

  const handleEdit = () => {
    Router.push('/editor')
  }
  const handlePrint = useReactToPrint({
    content: () => refs.planning.current,
    pageStyle: 'landscape'
  })

  return (
    <div className={styles.container}>
      <button className={styles.blueButton} onClick={handleEdit}>
        Go Editor
      </button>

      <button className={styles.greenButton} onClick={handlePrint}>
        Save as PDF
      </button>
    </div>
  )
}
