import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { routeStrings } from './routes'

const HomePageRedirector = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate(routeStrings.home)
  }, [navigate])

  return null
}

export default HomePageRedirector
