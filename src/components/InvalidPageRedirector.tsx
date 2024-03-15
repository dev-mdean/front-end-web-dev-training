import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { routesDictionary } from './routes'

const InvalidPageRedirector = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate(routesDictionary.invalid!.path)
  }, [navigate])

  return null
}

export default InvalidPageRedirector
