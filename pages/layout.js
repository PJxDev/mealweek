import PlanningProvider from '@/components/Context/PlanningContext'
import Header from '@/components/Header/Header'
import React from 'react'

export default function Layout({ children }) {
  return (
    <PlanningProvider>
      <Header />
      {children}
    </PlanningProvider>
  )
}
