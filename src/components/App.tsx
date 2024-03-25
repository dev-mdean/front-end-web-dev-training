import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { Provider } from 'react-redux'
import { AppStore } from '../redux/store'
import Layout from './layout/Layout'
import { HashRouter, Route, Routes } from 'react-router-dom'
import PageList from './PageList/PageList'
import { routes, routesDictionary } from './routes'
import Redirector from './Redirector'
import { pageDictionary } from '../pages'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

function App() {
  const preventDefault = (e: any) => e.preventDefault()
  // When rendering our container
  window.addEventListener('touchmove', preventDefault, {
    passive: false,
  })
  // Remember to clean up when removing it
  window.removeEventListener('touchmove', preventDefault)
  return (
    <Provider store={AppStore}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <HashRouter basename=''>
          <Routes>
            <Route element={<Layout leftPanelChildren={<PageList />} />}>
              <Route
                element={<Redirector path={pageDictionary.home!.path} />}
                index
              />
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
            <Route
              element={<Redirector path={routesDictionary.invalid!.path} />}
              path='*'
            />
          </Routes>
        </HashRouter>
      </ThemeProvider>
    </Provider>
  )
}

export default App
