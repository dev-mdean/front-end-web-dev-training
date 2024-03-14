import useAppMediaQueries from '../../hooks/useAppMediaQueries'
import Header from './Header'
import Body, { BodyProps } from './Body'
import Box from '@mui/material/Box'
import NavigationMenu from './NavigationMenu'
import { APP_BACKGROUND_COLOR } from './constants'
import { Outlet } from 'react-router-dom'
import useAppUrlParams from '../../hooks/useAppUrlParmas'

interface Props extends BodyProps {}

const Layout = ({ children, leftPanelChildren }: Props) => {
  useAppMediaQueries()
  useAppUrlParams()

  return (
    <Box
      sx={{
        backgroundColor: APP_BACKGROUND_COLOR,
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
        <Body leftPanelChildren={leftPanelChildren}>
          {children}
          <Outlet />
        </Body>
      </Box>
      <NavigationMenu />
    </Box>
  )
}

export default Layout
