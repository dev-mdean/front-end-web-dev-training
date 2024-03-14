import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Link as RouterLink } from 'react-router-dom'
import { generatePathTo } from './routes'
import { pagePaths } from '../pages'

const InvalidRoutePage = () => {
  return (
    <Box alignItems='center' display='flex' flexDirection='column' rowGap={2}>
      <img
        alt='sad'
        src='https://www.nicepng.com/png/detail/313-3138973_wile-e-coyote-face-download-wylie-coyote.png'
      />
      <Typography variant='h2'>Uh oh!</Typography>
      <Typography>
        We can't seem to find the page you are looking for.
      </Typography>
      <Typography>
        The address might be misspelled or the page may have moved.
      </Typography>
      <Typography>Error code: 404</Typography>
      <Button
        component={RouterLink}
        to={generatePathTo.page(pagePaths.home)}
        variant='contained'
      >
        Go Home
      </Button>
    </Box>
  )
}

export default InvalidRoutePage
