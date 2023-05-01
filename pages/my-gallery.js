import Layout from './layout'
import styles from '../styles/index.module.css'
import MyGallery from '@/components/MyGallery/MyGallery'

export default function PlanningEditor() {
  return (
    <>
      <Layout>
        <main className={styles.main}>
          <h2>My Gallery</h2>
          <MyGallery />
        </main>
      </Layout>
    </>
  )
}
