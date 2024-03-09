import Drawer from '@mui/material/Drawer'
import PageList from '../PageList/PageList'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { useCallback } from 'react'
import { setShowNavigationMenu } from '../../redux/screenSlice'
import {
  APP_BACKGROUND_COLOR,
  APP_HEADER_HEIGHT,
  PANEL_BORDER_COLOR,
  PANEL_BORDER_STYLE,
  PANEL_BORDER_WIDTH,
} from './constants'
import Box from '@mui/material/Box'
import AppTitleButton from '../AppTitleButton'

const NavigationMenu = () => {
  const dispatch = useAppDispatch()
  const showNavigationMenu = useAppSelector((s) => s.screen.showNavigationMenu)

  const closeNavigationMenu = useCallback(() => {
    dispatch(setShowNavigationMenu(false))
  }, [dispatch])

  return (
    <Drawer
      onClose={closeNavigationMenu}
      open={showNavigationMenu}
      sx={{
        '& .MuiDrawer-paper': {
          backgroundColor: APP_BACKGROUND_COLOR,
        },
      }}
    >
      <Box
        sx={{
          borderBottomColor: PANEL_BORDER_COLOR,
          borderBottomStyle: PANEL_BORDER_STYLE,
          borderBottomWidth: PANEL_BORDER_WIDTH,
        }}
      >
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            height: APP_HEADER_HEIGHT,
            justifyContent: 'center',
          }}
        >
          <AppTitleButton />
        </Box>
      </Box>
      <PageList onItemClicked={closeNavigationMenu} />
    </Drawer>
  )
}

export default NavigationMenu
