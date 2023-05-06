import styles from '../../styles/myGallery.module.css'
import Buttons from '../Buttons/MyGalleryButtons'
import axios from 'axios'
import PlanningCard from '../Cards/PlanningCard'

export default function MyGallery({ myPlannings: data }) {
  // const {
  //   planningData,
  //   setPlanningData,
  //   adding,
  //   setAdding,
  //   authorId,
  //   setAuthorId,
  //   favs,
  //   setFavs,
  //   isLogged,
  //   setIsLogged
  // } = useContext(PlanningContext)
  return (
    <div className={styles.container}>
      {data &&
        data.map((plan) => {
          return (
            <section>
              {Array.isArray(plan) ? (
                plan.map((day) => {
                  return (
                    <article>
                      <PlanningCard data={day} />
                    </article>
                  )
                })
              ) : (
                <article>
                  <PlanningCard data={plan} />
                </article>
              )}
            </section>
          )
        })}
    </div>
  )
}
