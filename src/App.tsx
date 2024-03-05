import Box from '@mui/material/Box'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Header from './Header'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
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
      </Box>
    </ThemeProvider>
  )
}

export default App
