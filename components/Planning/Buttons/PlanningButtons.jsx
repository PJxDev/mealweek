import styles from '../../../styles/planningButtons.module.css'
import dynamic from 'next/dynamic'

export default function PlanningButtons({ data, isEditting, setEditting }) {
  const PDFButton = dynamic(() => import('./PDFButton'))
  const handleEdit = () => {
    if (isEditting) {
      setEditting(false)
      return
    }
    setEditting(true)
  }
  const handleCancel = () => {
    if (isEditting) {
      setEditting(false)
      return
    }
    setEditting(true)
  }
  const handleSave = () => {}

  return (
    <div className={styles.container}>
      {isEditting ? (
        <>
          <button className={styles.saveButton} onClick={handleSave}>
            Save
          </button>
          <button className={styles.cancelButton} onClick={handleCancel}>
            Cancel
          </button>
        </>
      ) : (
        <button className={styles.editButton} onClick={handleEdit}>
          Edit
        </button>
      )}
      <PDFButton data={data} />
    </div>
  )
}
