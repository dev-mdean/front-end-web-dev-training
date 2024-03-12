import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { Provider } from 'react-redux'
import { AppStore } from '../redux/store'
import Layout from './layout/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MarkdownPage from './MarkdownPage'
import InvalidRoutePage from './InvalidRoutePage'
import PageList from './PageList/PageList'
import HomePage from './HomePage'
import { routes } from './routes'

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
            <Route element={<Layout leftPanelChildren={<PageList />} />}>
              <Route element={<HomePage />} index />
              <Route element={<MarkdownPage />} path={routes.docs.root}>
                {Object.values(routes.docs.subRoutes).map((subroute) => (
                  <Route element={<MarkdownPage />} path={subroute} />
                ))}
              </Route>
            </Route>
            <Route
              element={
                <Layout>
                  <InvalidRoutePage />
                </Layout>
              }
              path='*'
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  )
}

export default App
