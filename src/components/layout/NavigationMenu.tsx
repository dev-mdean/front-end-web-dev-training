import Drawer from '@mui/material/Drawer'
import PageList from '../PageList/PageList'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { useCallback } from 'react'
import { setShowNavigationMenu } from '../../redux/screenSlice'

const NavigationMenu = () => {
  const dispatch = useAppDispatch()
  const showNavigationMenu = useAppSelector((s) => s.screen.showNavigationMenu)

  const handleNavigationMenuClosed = useCallback(() => {
    dispatch(setShowNavigationMenu(false))
  }, [dispatch])

  return (
    <Drawer onClose={handleNavigationMenuClosed} open={showNavigationMenu}>
      <PageList />
    </Drawer>
  )
}

export default NavigationMenu
