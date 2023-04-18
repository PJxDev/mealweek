import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/header.module.css'
import logo from '../../public/logo.svg'
import UserButton from '../UserButton/UserButton'

export default function Header() {
  return (
    <header className={styles.container}>
      <Image
        className={styles.logo}
        src={logo}
        alt='logo of Mealweek'
        width={175}
      />
      <h1 className={styles.title}>
        <span
          style={{
            color: 'var(--color-primary)'
          }}
        >
          M
        </span>
        eal
        <span
          style={{
            color: 'var(--color-secondary)'
          }}
        >
          W
        </span>
        eek
      </h1>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.listElement}>
            <Link href='/'>Inicio</Link>
          </li>
          <li className={styles.listElement}>
            <Link href='/planner-editor'>Planner Editor</Link>
          </li>
          <li className={styles.listElement}>
            <Link href='/my-gallery'>My Meals's Gallery</Link>
          </li>
          <li className={styles.listElement}>
            <Link href='/all-meals'>All Meals</Link>
          </li>
        </ul>
      </nav>
      <UserButton className='user-button' />
    </header>
  )
}
