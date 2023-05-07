import PlanningProvider from '@/context/PlanningProvider'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <PlanningProvider>
      <Component {...pageProps} />
    </PlanningProvider>
  )
}
