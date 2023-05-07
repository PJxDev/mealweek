import { useContext } from 'react'
import styles from '../../styles/myGallery.module.css'
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
      console.log(result)
    } catch (error) {
      console.log(error.message)
      return
    }
    value.push(id)
    setFavs(value)

    // console.log(mealsData.filter((el) => el.id === id))
  }
  const handleDelFav = async (e) => {
    let value = [...favs]
    const id = Number(e.target.id)
    const idx = value.indexOf(id)
    if (id === -1) return
    try {
      const result = await axios.delete(`/api/${authorId}/${id}/my-gallery`)
      console.log(result)
    } catch (error) {
      console.log(error.message)
      return
    }
    value[idx] = 0
    value = value.filter((el) => el !== 0).flat()
    setFavs(value)
    console.log(value)
  }

  return (
    <div className={styles.container}>
      <section>
        {mealsData &&
          mealsData.map((meal) => {
            return (
              <article key={meal.id} className={styles.mealBox}>
                <h2>{meal.name}</h2>
                <span>{meal.icon}</span>
                <h4>{meal.composition}</h4>
                <button
                  style={{ fontSize: '1rem' }}
                  id={meal.id}
                  onClick={handleMoreInfo}
                >
                  👁
                </button>

                {favs && favs.includes(meal.id) ? (
                  <button
                    style={{ fontSize: '1rem' }}
                    id={meal.id}
                    onClick={handleDelFav}
                  >
                    💗
                  </button>
                ) : (
                  <button
                    style={{ fontSize: '1rem' }}
                    id={meal.id}
                    onClick={handleAddFav}
                  >
                    🤍
                  </button>
                )}
              </article>
            )
          })}
      </section>
    </div>
  )
}
