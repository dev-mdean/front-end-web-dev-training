import Box from '@mui/material/Box'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Header from './layout/Header'
import CssBaseline from '@mui/material/CssBaseline'
import Body from './layout/Body'
import { Provider } from 'react-redux'
import { AppStore } from '../redux/store'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

function App() {
  return (
    <Provider store={AppStore}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
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
      </ThemeProvider>
    </Provider>
  )
}

export default App
