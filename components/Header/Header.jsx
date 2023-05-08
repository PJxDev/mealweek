import Image from 'next/image'
import styles from '../../styles/header.module.css'
import logo from '@/assets/img/logo.svg'
import UserButton from '../UserButton/UserButton'
import HeaderNav from './HeaderNav'
import PlanningContext from '@/context/PlanningContext'
import { useContext, useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const {
    planningData,
    setPlanningData,
    adding,
    setAdding,
    authorId,
    setAuthorId,
    favs,
    setFavs,
    isLogged,
    setIsLogged
  } = useContext(PlanningContext)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={styles.container}>
      <Link href='/'>
        <Image
          className={styles.logo}
          src={logo}
          alt='logo of Mealweek'
          width={175}
          priority={true}
        />
      </Link>
      <button
        className={styles.burguerButton}
        onClick={() => {
          const value = !menuOpen
          setMenuOpen(value)
        }}
      >
        <div data-open={menuOpen}></div>
        <div data-open={menuOpen}></div>
        <div data-open={menuOpen}></div>
      </button>
      <div data-open={menuOpen} className={styles.burguerMenu}>
        <button onClick={() => setMenuOpen(false)}>❌</button>
        <UserButton className='user-button' />
        <HeaderNav />
      </div>
      {isLogged && <HeaderNav />}
      <UserButton className='user-button' />
    </header>
  )
}
