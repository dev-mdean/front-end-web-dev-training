import Paper from '@mui/material/Paper'
import Page from './Page'
import LeftPanel from './LeftPanel'
import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'

const Body = () => {
  const theme = useTheme()
  const showMobileLayout = useMediaQuery(theme.breakpoints.down('lg'))

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: showMobileLayout ? 'column' : 'row',
        height: 1,
      }}
    >
      {!showMobileLayout && (
        <Box>
          <LeftPanel />
        </Box>
      )}
      <Paper
        elevation={0}
        sx={{
          backgroundColor: 'transparent',
          flexGrow: 1,
          overflowY: 'scroll',
          p: 2,
        }}
      >
        <Page />
      </Paper>
    </Box>
  )
}

export default Body
