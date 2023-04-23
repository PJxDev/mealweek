import Image from 'next/image'
import styles from '../../styles/userButton.module.css'
import { useState } from 'react'
import Link from 'next/link'

export default function UserButton() {
  const [isUserLogged, setUserLogged] = useState(false)

  return (
    <div className={styles.container}>
      {isUserLogged ? (
        <>
          <h2 className={styles.name}>User</h2>
          <Image
            className={styles.image}
            src='https://picsum.photos/50/'
            alt='User icon'
            width={50}
            height={50}
          />
        </>
      ) : (
        <Link href='/login'>Log in</Link>
      )}
    </div>
  )
}
