import { useContext } from 'react'
import styles from '../../styles/allMeals.module.css'
import Router from 'next/router'
import axios from 'axios'
import PlanningContext from '@/context/PlanningContext'

export default function AllMeals({ mealsData }) {
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

  const handleMoreInfo = (e) => {
    const id = e.target.id
    Router.push(`/${id}/meals`)
  }
  const handleAddFav = async (e) => {
    const value = [...favs]
    const id = Number(e.target.id)
    try {
      const result = await axios.post('/api/my-gallery', {
        userId: authorId,
        mealId: id
      })
    } catch (error) {
      console.error(error.message)
      return
    }
    value.push(id)
    setFavs(value)
  }
  const handleDelFav = async (e) => {
    let value = [...favs]
    const id = Number(e.target.id)
    const idx = value.indexOf(id)
    if (id === -1) return
    try {
      const result = await axios.delete(`/api/${authorId}/${id}/my-gallery`)
    } catch (error) {
      console.error(error.message)
      return
    }
    value[idx] = 0
    value = value.filter((el) => el !== 0).flat()
    setFavs(value)
  }

  return (
    <div className={styles.container}>
      <h2>All Meals</h2>

      <section>
        {mealsData &&
          mealsData.map((meal) => {
            return (
              <article key={meal.id} className={styles.mealBox}>
                <h2>{meal.name}</h2>
                <span>{meal.icon}</span>
                <h4>{meal.composition}</h4>
                <div>
                  <button id={meal.id} onClick={handleMoreInfo}>
                    🔍
                  </button>

                  {favs && favs.includes(meal.id) ? (
                    <button id={meal.id} onClick={handleDelFav}>
                      💗
                    </button>
                  ) : (
                    <button id={meal.id} onClick={handleAddFav}>
                      🤍
                    </button>
                  )}
                </div>
              </article>
            )
          })}
      </section>
    </div>
  )
}
