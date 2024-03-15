import { Link as RouterLink } from 'react-router-dom'
import Link from '@mui/material/Link'
import { generatePathTo, routeStrings } from './routes'

const AppTitleButton = () => {
  return (
    <Link
      component={RouterLink}
      to={generatePathTo.page(routeStrings.home)}
      underline='hover'
      sx={{ color: 'white' }}
    >
      {document.title}
    </Link>
  )
}

export default AppTitleButton
