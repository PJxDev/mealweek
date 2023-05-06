import styles from '../../styles/header.module.css'
import Link from 'next/link'

export default function HeaderNav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.listElement}>
          <Link href='/'>Inicio</Link>
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
