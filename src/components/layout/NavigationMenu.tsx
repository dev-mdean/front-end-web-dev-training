import Drawer from '@mui/material/Drawer'
import PageList from '../PageList/PageList'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { useCallback } from 'react'
import { setShowNavigationMenu } from '../../redux/screenSlice'
import { APP_BACKGROUND_COLOR } from './constants'

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
      <PageList onItemClicked={closeNavigationMenu} />
    </Drawer>
  )
}

export default NavigationMenu
