import Page from './Page'
import LeftPanel from './LeftPanel'
import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import ScrollableBox from '../ScrollableBox'

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
      <ScrollableBox
        sx={{
          backgroundColor: 'transparent',
          flexGrow: 1,
          p: 2,
        }}
      >
        <Page />
      </ScrollableBox>
    </Box>
  )
}

export default Body
