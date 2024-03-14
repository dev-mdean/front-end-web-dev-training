import { Link as RouterLink } from 'react-router-dom'
import Link from '@mui/material/Link'
import { pagePaths } from '../pages'
import { generatePathTo } from './routes'

const AppTitleButton = () => {
  return (
    <Link
      component={RouterLink}
      to={generatePathTo.page(pagePaths.home)}
      underline='hover'
      sx={{ color: 'white' }}
    >
      {document.title}
    </Link>
  )
}

export default AppTitleButton
