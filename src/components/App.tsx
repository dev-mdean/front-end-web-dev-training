import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { Provider } from 'react-redux'
import { AppStore } from '../redux/store'
import Layout from './layout/Layout'
import { HashRouter, Route, Routes } from 'react-router-dom'
import PageList from './PageList/PageList'
import HomePageRedirector from './HomePageRedirector'
import { routes } from './routes'
import InvalidPageRedirector from './InvalidPageRedirector'

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
        <HashRouter basename=''>
          <Routes>
            <Route element={<Layout leftPanelChildren={<PageList />} />}>
              <Route element={<HomePageRedirector />} index />
              {routes.map((route) => {
                return (
                  <Route key={route.path} path={route.path}>
                    <Route element={route.component} index />
                    {route.subRoutes &&
                      Object.values(route.subRoutes).map((subroute) => (
                        <Route
                          element={subroute.component ?? route.component}
                          key={subroute.path}
                          path={subroute.path}
                        />
                      ))}
                  </Route>
                )
              })}
            </Route>
            <Route element={<InvalidPageRedirector />} path='*' />
          </Routes>
        </HashRouter>
      </ThemeProvider>
    </Provider>
  )
}

export default App
