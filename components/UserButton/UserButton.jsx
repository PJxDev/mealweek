import Image from 'next/image'
import styles from '../../styles/userButton.module.css'

export default function UserButton() {
  return (
    <div className={styles.container}>
      <h2 className={styles.name}>User</h2>
      <Image
        className={styles.image}
        src='https://picsum.photos/50/'
        alt='User icon'
        width={50}
        height={50}
      />
    </div>
  )
}
