import Box from '@mui/material/Box'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Header from './layout/Header'
import CssBaseline from '@mui/material/CssBaseline'
import Body from './layout/Body'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
        sx={{
          backgroundColor: 'background.default',
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
    </ThemeProvider>
  )
}

export default App
