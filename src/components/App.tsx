import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { Provider } from 'react-redux'
import { AppStore } from '../redux/store'
import Layout from './layout/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MarkdownPage from './MarkdownPage'

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
        <BrowserRouter basename='/front-end-web-dev-training'>
          <Routes>
            <Route element={<Layout />}>
              <Route index />
              <Route element={<MarkdownPage />} path=':folder'>
                <Route element={<MarkdownPage />} path=':filePath' />
              </Route>
            </Route>
            <Route path='*' />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  )
}

export default App
