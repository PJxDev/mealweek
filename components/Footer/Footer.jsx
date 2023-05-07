import styles from '../../styles/footer.module.css'
import Image from 'next/image'
import logo from '@/assets/img/logo-footer.svg'
import FooterNav from './FooterNav'
import PlanningContext from '@/context/PlanningContext'
import { useContext } from 'react'

export default function Footer() {
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
    <footer className={styles.footer} style={{ gap: '1rem' }}>
      {isLogged ? (
        <>
          <header>
            <Image
              className={styles.logo}
              src={logo}
              alt='logo of Mealweek'
              width={50}
              height={50}
              priority={true}
            />
            <h2>Mealweek</h2>
          </header>
          <section>
            <FooterNav />
            <h5>&copy; 2023 PJCruces</h5>
          </section>
        </>
      ) : (
        <>
          <header
            style={{
              display: 'grid',
              placeItems: 'center',
              width: '100%'
            }}
          >
            <Image
              className={styles.logo}
              src={logo}
              alt='logo of Mealweek'
              width={50}
              height={50}
              priority={true}
            />
            <h2>Mealweek</h2>
          </header>
          <section>
            <h5>&copy; 2023 PJCruces</h5>
          </section>
        </>
      )}
    </footer>
  )
}
