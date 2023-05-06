import { useContext, useState } from 'react'
import styles from '../../styles/myGallery.module.css'
import Router from 'next/router'
import axios from 'axios'
import PlanningContext from '../../context/PlanningContext'

export default function AllMeals({ mealsData }) {
  const { authorId, favs, setFavs } = useContext(PlanningContext)
  console.log(authorId)

  const handleClick = (e) => {
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

    // FAVS deberia de estar en el contexto, cuando el usuario hace el loggin
    // este handle modifica el FAVS
    // si la comida es favorita, aparecerá una x para eliminarla, y sino, aparecerá un corazón para agregarla
    console.log(mealsData.filter((el) => el.id === id))
  }
  const handleDelFav = async (e) => {
    let value = [...favs]
    const id = Number(e.target.id)
    const idx = value.indexOf(id)
    if (id === -1) return
    try {
      const result = await axios.delete('/api/my-gallery', {
        userId: authorId,
        mealId: id
      })
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
                  onClick={handleClick}
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
