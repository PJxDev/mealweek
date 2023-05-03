import styles from '../../styles/buttons.module.css'
import { useContext, useState } from 'react'
import { PlanningContext } from '../../context/PlanningContext'
import Portal from '../Portal'
import FormCreateMeal from '../Forms/FormCreateMeal'

export default function MyGalleryButtons({ ingredients }) {
  const [modalShow, setModalShow] = useState(false)
  const {
    planningData,
    setPlanningData,
    adding,
    setAdding,
    isLogged,
    setIsLogged
  } = useContext(PlanningContext)

  const handleCreate = () => {
    setModalShow(true)
  }

  return (
    <div className={styles.container}>
      <button className={styles.greenButton} onClick={handleCreate}>
        Create Meal
      </button>
      {modalShow ? (
        <Portal>
          <FormCreateMeal
            setModalshow={setModalShow}
            ingredients={ingredients}
          />
        </Portal>
      ) : null}
    </div>
  )
}
