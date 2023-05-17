import styles from '../../styles/listPlannings.module.css'
import Buttons from '../Buttons/MyGalleryButtons'
import axios from 'axios'
import PlanningCard from '../Cards/PlanningCard'
import PlanningContext from '@/context/PlanningContext'
import { useContext, useEffect, useState } from 'react'
import Router from 'next/router'

export default function MyGallery({ myPlannings: data }) {
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
  const [listPlannings, setListPlannings] = useState(data)
  const [dataChanged, setDataChanged] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      if (authorId !== undefined) {
        const result = await axios.post('/api/plannings', { authorId })
        setListPlannings(result.data)
      }
    }

    fetchData()
    setDataChanged(false)
  }, [dataChanged])

  const handleDeletePlan = async (e) => {
    let value = [...listPlannings]
    const planId = Number(e.target.id)
    const idx = value.indexOf(planId)
    const option = window.confirm(
      'Are you sure you want to delete this planning?'
    )
    if (option) {
      try {
        const result = await axios.delete(`/api/${planId}/my-plannings`)
        window.alert('The planning has been deleted succesfully!')
        value[idx] = 0
        value = value.filter((el) => el !== 0).flat()
        setListPlannings(value)
      } catch (error) {
        console.error(error.message)
      }
      setDataChanged(true)
    }
  }
  const handleSendPlan = (e) => {
    const id = e.target.id
    const [value] = listPlannings.filter((el) => el.id === Number(id))
    setPlanningData(value.plan)
    Router.push('/editor')
  }
  return (
    <div className={styles.container}>
      <h2>My Plannings</h2>
      {listPlannings &&
        listPlannings.map((planning, idx) => {
          return (
            <section>
              <header>
                <h1>Plan {idx + 1}</h1>
                <div>
                  <button id={planning.id} onClick={handleSendPlan}>
                    &#10157;
                  </button>
                  <button id={planning.id} onClick={handleDeletePlan}>
                    💔
                  </button>
                </div>
              </header>
              <article>
                {Array.isArray(planning.plan) ? (
                  planning.plan.map((day) => {
                    return (
                      <div className={styles.containerPlan}>
                        <PlanningCard data={day} />
                      </div>
                    )
                  })
                ) : (
                  <article>
                    <PlanningCard data={planning} />
                  </article>
                )}
              </article>
            </section>
          )
        })}
      {listPlannings?.length < 1 && (
        <h2>Save some plannings, so you can see them here!</h2>
      )}
    </div>
  )
}
