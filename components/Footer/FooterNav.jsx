import styles from '../../styles/footer.module.css'
import Link from 'next/link'

export default function HeaderNav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.listElement}>
          <Link href='/Planning'>Planning</Link>
        </li>
        <li className={styles.listElement}>
          <Link href='/my-plannings'>My Plannings</Link>
        </li>
        <li className={styles.listElement}>
          <Link href='/my-gallery'>My Meals's Gallery</Link>
        </li>
        <li className={styles.listElement}>
          <Link href='/all-meals'>All Meals</Link>
        </li>
      </ul>
    </nav>
  )
}
