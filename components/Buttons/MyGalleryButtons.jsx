import styles from '../../styles/buttons.module.css'
import { useState } from 'react'
import Portal from '../Portal'
import FormCreateMeal from '../Forms/FormCreateMeal'

export default function MyGalleryButtons({ ingredients }) {
  const [modalShow, setModalShow] = useState(false)

  const handleCreate = () => {
    setModalShow(true)
  }

  return (
    <div className={styles.container}>
      <button className={styles.blueButton} onClick={handleCreate}>
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
