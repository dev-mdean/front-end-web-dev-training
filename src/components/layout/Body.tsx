import Page from './Page'
import LeftPanel from './LeftPanel'
import Box from '@mui/material/Box'
import ScrollableBox from '../ScrollableBox'
import { useAppSelector } from '../../redux/hooks'

const Body = () => {
  const showMobileLayout = useAppSelector((s) => s.screen.showMobileLayout)

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
