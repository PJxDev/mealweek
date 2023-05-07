import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from './layout'
import { verify } from 'jsonwebtoken'
import useCookieData from '@/hooks/useCookieData'
import styles from '../styles/index.module.css'
import img from '@/assets/img/img2.png'

export default function Home({ userData }) {
  useCookieData(userData)
  return (
    <>
      <Head>
        <title>MealWeek</title>
        <meta
          name='description'
          content='A weeky planner manager that can get you a shopping list as well.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <main className={styles.main}>
          <header className={styles.header}>
            <h1>
              Meal<span>W</span>eek
            </h1>
          </header>
          <section className={styles.section}>
            <h2>
              Your APP to manage all the meals that you'll have in your week!
            </h2>
            <article className={styles.box}>
              <Image
                src={img}
                width={500}
                height={500}
                alt='logo of Mealweek'
                loading='lazy'
                placeholder='blur'
              />
              <div>
                <p>
                  Are you worried about making a shopping list and forgetting
                  something?
                </p>
                <h3>Don't Worry</h3>
                <p>
                  MealWeek will generate a shopping list with everything that
                  you need to make your plan succed!
                </p>
              </div>
            </article>
            <article className={styles.banner}>
              <h2>
                Register now! Is Free! And the best is that it will help you
                daily!
              </h2>
              <div>
                <Link href={'/register'}>Sign Up here!</Link>
                <span>or if you are already in our Club!</span>
                <Link href={'/login'}>Sign In here!</Link>
              </div>
            </article>
          </section>
        </main>
      </Layout>
    </>
  )
}
export async function getServerSideProps(context) {
  const { tkn } = context.req.cookies
  if (tkn) {
    const userData = verify(tkn, process.env.PASS_SECRET)
    console.log(userData.id)
    return { props: { userData } }
  }
  return { props: {} }
}
