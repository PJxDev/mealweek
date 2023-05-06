import styles from '@/styles/planning.module.css'
import PlanningCard from '../Cards/PlanningCard'
import ShoppingList from './ShoppingList/ShoppingList'
import Buttons from '../Buttons/PlanningButtons'
import { useContext, useEffect, useRef } from 'react'
import { PlanningContext } from '../../context/PlanningProvider'

export default function Planning({ userData }) {
  const {
    planningData,
    setPlanningData,
    adding,
    setAdding,
    authorId,
    setAuthorId,
    isLogged,
    setIsLogged
  } = useContext(PlanningContext)
  const planningRef = useRef()
  const listRef = useRef()

  useEffect(() => {
    if (userData) {
      setAuthorId(userData.id)
      setIsLogged(true)
    } else {
      setIsLogged(false)
    }
  }, [])

  return (
    <section ref={planningRef} className={styles.container}>
      <article className={styles.planningContainer}>
        <header>
          <h2>Planning</h2>
        </header>
        <section className={styles.planningCards}>
          {planningData?.map((el, idx) => {
            return (
              <PlanningCard key={idx} idx={idx} data={el} isEditting={false} />
            )
          })}
        </section>
      </article>
      <article ref={listRef} id='list' className={styles.planningContainer}>
        <div className={styles.shoppingListContainer}>
          <h2>List</h2>
          <ShoppingList />
        </div>
      </article>
      <Buttons
        refs={{ planning: planningRef, list: listRef }}
        setEditting={false}
      />
    </section>
  )
}
