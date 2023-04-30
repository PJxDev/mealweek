import Image from 'next/image'
import styles from '../../styles/header.module.css'
import logo from '@/assets/img/logo.svg'
import UserButton from '../UserButton/UserButton'
import HeaderNav from './HeaderNav'

export default function Header() {
  return (
    <header className={styles.container}>
      <Image
        className={styles.logo}
        src={logo}
        alt='logo of Mealweek'
        width={175}
        priority={true}
      />
      <HeaderNav />
      <UserButton className='user-button' />
    </header>
  )
}
