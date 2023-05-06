import styles from '../../styles/buttons.module.css'
import Router from 'next/router'
import dynamic from 'next/dynamic'
import { useContext } from 'react'
import { PlanningContext } from '../../context/PlanningContext'
import axios from 'axios'

export default function PlanningButtons({ refs }) {
  const { planningData, setPlanningData, adding, setAdding, authorId } =
    useContext(PlanningContext)
  const PDFButton = dynamic(() => import('./PDFButton.jsx'), { ssr: false })

  const handleEdit = () => {
    Router.push('/editor')
  }
  const handleSave = async () => {
    console.log({ planningData })
    const result = await axios.post('/api/plannings', {
      authorId,
      planningJson: JSON.stringify({ planningData })
    })
  }

  return (
    <div className={styles.container}>
      <button className={styles.blueButton} onClick={handleEdit}>
        Go Editor
      </button>
      <button className={styles.greenButton} onClick={handleSave}>
        Save Planning
      </button>
      <PDFButton refs={refs} data={planningData} />
    </div>
  )
}
