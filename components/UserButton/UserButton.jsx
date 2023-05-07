import Image from 'next/image'
import styles from '../../styles/userButton.module.css'
import { useContext, useState } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import axios from 'axios'
import PlanningContext from '@/context/PlanningContext'
import { verify } from 'jsonwebtoken'

export default function UserButton({ username }) {
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
  const handleLogout = async () => {
    setIsLogged(false)
    await axios.post('/api/auth/logout')
    Router.push('/')
  }

  return (
    <div className={styles.container}>
      {isLogged ? (
        <>
          <h2 className={styles.name}>User {authorId}</h2>
          <Image
            className={styles.image}
            src='https://picsum.photos/50/'
            alt='User icon'
            width={50}
            height={50}
          />
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <Link href='/login'>Log in</Link>
      )}
    </div>
  )
}
