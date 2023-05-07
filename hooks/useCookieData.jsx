import PlanningContext from '@/context/PlanningContext'
import { useContext, useEffect } from 'react'

export default function useCookieData(userData) {
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

  useEffect(() => {
    if (userData) {
      setFavs(userData.favs)
      setAuthorId(userData.id)
      setIsLogged(true)
    } else {
      setIsLogged(false)
    }
  }, [])
}
