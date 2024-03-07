import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import {
  PANEL_BORDER_COLOR,
  PANEL_BORDER_STYLE,
  PANEL_BORDER_WIDTH,
} from './constants'

const Header = () => {
  return (
    <AppBar
      color='transparent'
      elevation={0}
      position='static'
      sx={{
        borderBottomColor: PANEL_BORDER_COLOR,
        borderBottomStyle: PANEL_BORDER_STYLE,
        borderBottomWidth: PANEL_BORDER_WIDTH,
      }}
    >
      <Toolbar sx={{ height: '64px' }}>
        <Typography>{document.title}</Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
