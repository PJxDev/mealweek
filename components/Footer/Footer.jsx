import styles from '../../styles/footer.module.css'
import Image from 'next/image'
import logo from '@/assets/img/logo-footer.svg'
import FooterNav from './FooterNav'

export default function Footer() {
  return (
    <div className={styles.footer}>
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
    </div>
  )
}
