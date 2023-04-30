import '@/styles/globals.css'
import PlanningProvider from '@/context/PlanningContext'

export default function App({ Component, pageProps }) {
  return (
    <PlanningProvider>
      <Component {...pageProps} />
    </PlanningProvider>
  )
}
