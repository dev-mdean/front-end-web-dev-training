import Box from '@mui/material/Box'
import {
  PANEL_BORDER_WIDTH,
  PANEL_BORDER_STYLE,
  PANEL_BORDER_COLOR,
} from './constants'

const LeftPanel = () => {
  return (
    <Box
      sx={{
        borderRightColor: PANEL_BORDER_COLOR,
        borderRightStyle: PANEL_BORDER_STYLE,
        borderRightWidth: PANEL_BORDER_WIDTH,
        height: 1,
        width: '20rem',
      }}
    ></Box>
  )
}

export default LeftPanel
