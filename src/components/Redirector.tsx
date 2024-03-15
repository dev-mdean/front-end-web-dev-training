import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {
  path: string
}

const Redirector = ({ path }: Props) => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate(path)
  }, [navigate, path])

  return null
}

export default Redirector
