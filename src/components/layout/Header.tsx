import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import {
  PANEL_BORDER_COLOR,
  PANEL_BORDER_STYLE,
  PANEL_BORDER_WIDTH,
} from './constants'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import MenuIcon from '@mui/icons-material/Menu'
import React, { useCallback } from 'react'
import { setShowNavigationMenu } from '../../redux/screenSlice'
import IconButton from '@mui/material/IconButton'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'

const Header = () => {
  const dispatch = useAppDispatch()
  const showMobileLayout = useAppSelector((s) => s.screen.showMobileLayout)
  const selectedPage = useAppSelector((s) => s.pages.selectedPage)

  const handleMenuButtonClicked = useCallback(
    (event: React.SyntheticEvent) => {
      dispatch(setShowNavigationMenu(true))
    },
    [dispatch]
  )

  return (
    <AppBar
      color='transparent'
      elevation={0}
      position='static'
      sx={{
        borderBottomColor: PANEL_BORDER_COLOR,
        borderBottomStyle: PANEL_BORDER_STYLE,
        borderBottomWidth: PANEL_BORDER_WIDTH,
      }}
    >
      <Toolbar sx={{ height: '64px' }}>
        {showMobileLayout && (
          <IconButton
            color='primary'
            edge='start'
            onClick={handleMenuButtonClicked}
            sx={{ mr: 1 }}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Breadcrumbs>
          <Link
            color='inherit'
            href='/'
            underline='hover'
            sx={{ color: 'white' }}
          >
            {document.title}
          </Link>
          <Link color='primary' href='/' underline='hover'>
            {selectedPage}
          </Link>
        </Breadcrumbs>
      </Toolbar>
    </AppBar>
  )
}

export default Header
