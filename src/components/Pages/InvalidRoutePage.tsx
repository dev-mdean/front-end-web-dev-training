import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Link as RouterLink } from 'react-router-dom'
import { generatePathTo, routeStrings } from '../routes'
import ScrollableBox from '../ScrollableBox'
import PageHeader from './PageHeader'

const InvalidRoutePage = () => {
  return (
    <Box display='flex' flexDirection='column' width={1}>
      <PageHeader sx={{ backgroundColor: 'crimson', p: 2 }} title='Uh oh!' />
      <ScrollableBox
        sx={{
          backgroundColor: 'transparent',
          flexGrow: 1,
          p: 2,
        }}
      >
        <Box
          alignItems='center'
          display='flex'
          flexDirection='column'
          rowGap={2}
        >
          <img
            alt='sad'
            src='https://www.nicepng.com/png/detail/313-3138973_wile-e-coyote-face-download-wylie-coyote.png'
          />
          <Typography>
            We can't seem to find the page you are looking for.
          </Typography>
          <Typography>
            The address might be misspelled or the page may have moved.
          </Typography>
          <Button
            component={RouterLink}
            to={generatePathTo.page(routeStrings.home)}
            variant='contained'
          >
            Go Home
          </Button>
        </Box>
      </ScrollableBox>
    </Box>
  )
}

export default InvalidRoutePage
