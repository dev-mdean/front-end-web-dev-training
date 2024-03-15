import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { pageDictionary } from '../pages'

const HomePageRedirector = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate(pageDictionary.home!.path)
  }, [navigate])

  return null
}

export default HomePageRedirector