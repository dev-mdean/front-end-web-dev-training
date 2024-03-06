import Box from '@mui/material/Box'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Header from './Header'
import CssBaseline from '@mui/material/CssBaseline'
import Body from './Body'

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
          height: 1,
          width: 1,
        }}
      >
        <Header />
        <Box sx={{ flexGrow: 1, mt: 8 }}>
          <Body />
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App
