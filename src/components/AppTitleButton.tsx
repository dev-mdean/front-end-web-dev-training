import { Link as RouterLink } from 'react-router-dom'
import Link from '@mui/material/Link'

const AppTitleButton = () => {
  return (
    <Link
      component={RouterLink}
      to='/'
      underline='hover'
      sx={{ color: 'white' }}
    >
      {document.title}
    </Link>
  )
}

export default AppTitleButton
