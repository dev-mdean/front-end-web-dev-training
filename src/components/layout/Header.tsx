import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

const Header = () => {
  return (
    <AppBar position='fixed'>
      <Toolbar sx={{ height: '64px' }}>
        <Typography>{document.title}</Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
