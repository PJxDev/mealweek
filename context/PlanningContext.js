import { createContext, useEffect, useState } from 'react'

export const PlanningContext = createContext()

export default function PlanningProvider({ children }) {
  const initialData = [
    {
      day: 'Monday',
      lunch: '',
      dinner: ''
    },
    {
      day: 'Tuesday',
      lunch: '',
      dinner: ''
    },
    {
      day: 'Wednesday',
      lunch: '',
      dinner: ''
    },
    {
      day: 'Thursday',
      lunch: '',
      dinner: ''
    },
    {
      day: 'Friday',
      lunch: '',
      dinner: ''
    },
    {
      day: 'Saturday',
      lunch: '',
      dinner: ''
    },
    {
      day: 'Sunday',
      lunch: '',
      dinner: ''
    }
  ]
  const [planningData, setPlanningData] = useState(initialData)
  const [adding, setAdding] = useState({ state: false })
  useEffect(() => {
    console.log('Provider montado')
  }, [])

  return (
    <PlanningContext.Provider
      value={{ planningData, setPlanningData, adding, setAdding }}
    >
      {children}
    </PlanningContext.Provider>
  )
}
