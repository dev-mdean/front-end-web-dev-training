import Box from '@mui/material/Box'
import Header from './Header'
import Body from './Body'
import useAppMediaQueries from './useAppMediaQueries'

const Layout = () => {
  useAppMediaQueries()

  return (
    <Box
      sx={{
        backgroundColor: 'grey.900',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        position: 'fixed',
        width: '100vw',
      }}
    >
      <Box sx={{ flexBasis: 'auto', flexGrow: 0, flexShrink: 0 }}>
        <Header />
      </Box>
      <Box
        sx={{
          flexBasis: 'auto',
          flexGrow: 1,
          flexShrink: 1,
          overflow: 'hidden',
        }}
      >
        <Body />
      </Box>
    </Box>
  )
}

export default Layout
