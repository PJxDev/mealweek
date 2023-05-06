import { useContext } from 'react'
import styles from '../../styles/myGallery.module.css'
// import data from '@/examples/my-gallery.json'
import Buttons from '../Buttons/MyGalleryButtons'
import axios from 'axios'
import PlanningContext from '@/context/PlanningContext'
import logo from '../../assets/img/logo-footer.svg'

export default function MyGallery({ data, ingredients }) {
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

  function filterItems(arr, mealId) {
    return arr.filter((el) => String(el.id) === mealId)
  }

  const handleMealSelect = (e) => {
    if (!adding.state) return

    const value = [...planningData]

    const [meal] = filterItems(data, e.target.id)

    if (adding.target === 'lunch') {
      value[adding.target_id].lunch = {
        icon: meal.icon,
        name: meal.name,
        ingredients: meal.ingredients
      }
    }
    if (adding.target === 'dinner') {
      value[adding.target_id].dinner = {
        icon: meal.icon,
        name: meal.name,
        ingredients: meal.ingredients
      }
    }

    setPlanningData([...value])
    setAdding({ state: false })
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
        {data &&
          data.map((meal) => {
            return (
              <article key={meal.id} className={styles.mealBox}>
                {favs &&
                  adding.state === false &&
                  (favs.includes(meal.id) ? (
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
                  ))}
                <h3>{meal.name}</h3>
                <span>{meal.icon}</span>
                <h6>{meal.composition}</h6>
                {adding.state && (
                  <button id={meal.id} onClick={handleMealSelect}>
                    ⏪
                  </button>
                )}
              </article>
            )
          })}
      </section>
      <Buttons ingredients={ingredients} />
    </div>
  )
}
