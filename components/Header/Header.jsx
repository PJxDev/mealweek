import Image from 'next/image'
import styles from '../../styles/header.module.css'
import logo from '@/assets/img/logo.svg'
import UserButton from '../UserButton/UserButton'
import HeaderNav from './HeaderNav'
import PlanningContext from '@/context/PlanningContext'
import { useContext } from 'react'

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
  return (
    <header className={styles.container}>
      <Image
        className={styles.logo}
        src={logo}
        alt='logo of Mealweek'
        width={175}
        priority={true}
      />
      {isLogged && <HeaderNav />}
      <UserButton className='user-button' />
    </header>
  )
}
