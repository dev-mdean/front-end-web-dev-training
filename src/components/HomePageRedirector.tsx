import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { pagePaths } from '../pages'

const HomePageRedirector = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate(pagePaths.home)
  }, [navigate])

  return null
}

export default HomePageRedirector
