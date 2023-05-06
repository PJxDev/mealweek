import Image from 'next/image'
import styles from '../../styles/userButton.module.css'
import { useContext, useState } from 'react'
import Link from 'next/link'
import { PlanningContext } from '@/context/PlanningProvider'
import Router from 'next/router'
import axios from 'axios'

export default function UserButton() {
  const {
    planningData,
    setPlanningData,
    adding,
    setAdding,
    authorId,
    setAuthorId,
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
          <h2 className={styles.name}>User</h2>
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
