import styles from '@/styles/editor.module.css'
import PlanningCard from '../Cards/PlanningCard'
import Buttons from '../Buttons/EditorButtons'
import MyGallery from '../MyGallery/MyGallery'
import { useContext, useEffect, useRef } from 'react'
import PlanningContext from '@/context/PlanningContext'

export default function Editor({ data }) {
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
  const planningRef = useRef()
  const listRef = useRef()

  useEffect(() => {
    setAdding({ state: false })
  }, [])

  return (
    <section ref={planningRef} className={styles.container}>
      <article className={styles.planningContainer}>
        <header>
          <h2>Editor</h2>
        </header>
        <section className={styles.planningCards}>
          {planningData?.map((el, idx) => {
            return (
              <PlanningCard key={idx} idx={idx} data={el} isEditting={true} />
            )
          })}
        </section>
      </article>
      <article ref={listRef} id='list' className={styles.planningContainer}>
        <div className={styles.shoppingListContainer}>
          <h2>My Gallery</h2>
          <MyGallery data={data} />
        </div>
      </article>
      <Buttons refs={{ planning: planningRef, list: listRef }} />
    </section>
  )
}
