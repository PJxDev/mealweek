import styles from '../../styles/myGallery.module.css'
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
      console.log(listPlannings)
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
        console.log(result)
        window.alert('The planning has been deleted succesfully!')
        value[idx] = 0
        value = value.filter((el) => el !== 0).flat()
        setListPlannings(value)
      } catch (error) {
        console.log(error.message)
      }
      setDataChanged(true)
    }
  }
  const handleSendPlan = (e) => {
    const id = e.target.id
    const [value] = listPlannings.filter((el) => el.id === Number(id))
    console.log(value.plan)
    setPlanningData(value.plan)
    Router.push('/editor')
  }
  return (
    <div className={styles.container}>
      {listPlannings &&
        listPlannings.map((planning, idx) => {
          return (
            <section style={{ border: '2px solid blue', padding: '2rem' }}>
              <h1>Plan {planning.id}</h1>
              <div>
                <button id={planning.id} onClick={handleDeletePlan}>
                  💔
                </button>
                <button id={planning.id} onClick={handleSendPlan}>
                  &#8678;
                </button>
              </div>
              {Array.isArray(planning.plan) ? (
                planning.plan.map((day) => {
                  return (
                    <article>
                      <PlanningCard data={day} />
                    </article>
                  )
                })
              ) : (
                <article>
                  <PlanningCard data={planning} />
                </article>
              )}
            </section>
          )
        })}
      {listPlannings?.length < 1 && (
        <h2>Save some plannings, so you can see them here!</h2>
      )}
    </div>
  )
}
