import Box from '@mui/material/Box'
import {
  PANEL_BORDER_WIDTH,
  PANEL_BORDER_STYLE,
  PANEL_BORDER_COLOR,
} from './constants'
import PageList from '../PageList/PageList'

const LeftPanel = () => {
  return (
    <Box
      sx={{
        borderRightColor: PANEL_BORDER_COLOR,
        borderRightStyle: PANEL_BORDER_STYLE,
        borderRightWidth: PANEL_BORDER_WIDTH,
        height: 1,
      }}
    >
      <PageList />
    </Box>
  )
}

export default LeftPanel
