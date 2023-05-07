import PlanningContext from '@/context/PlanningContext'
import styles from '../../styles/buttons.module.css'
import Router from 'next/router'
import { useContext } from 'react'
import axios from 'axios'

export default function EditorButtons() {
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
  const handleBack = () => {
    Router.push('/planning')
  }
  const handleSave = async () => {
    const option = window.confirm(
      'Are you sure you want to save this planning?'
    )

    if (option) {
      try {
        const result = await axios.post('/api/plannings', {
          authorId,
          planningJson: JSON.stringify({ planningData })
        })
        window.alert('The planning has been saved succesfully!')
      } catch (error) {
        console.error(error)
        window.alert(error.message)
      }
    }
  }

  return (
    <div className={styles.container}>
      <button className={styles.blueButton} onClick={handleBack}>
        Go back to Planning
      </button>
      <button className={styles.greenButton} onClick={handleSave}>
        Save Planning
      </button>
    </div>
  )
}
