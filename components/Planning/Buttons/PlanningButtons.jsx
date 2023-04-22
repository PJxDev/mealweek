import styles from '../../../styles/planningButtons.module.css'
export default function PlanningButtons({ isEditting, setEditting }) {
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

  const handleDownload = () => {}
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
      <button className={styles.downloadButton} onClick={handleDownload}>
        Download
      </button>
    </div>
  )
}
