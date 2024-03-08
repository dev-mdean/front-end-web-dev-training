import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import {
  PANEL_BORDER_COLOR,
  PANEL_BORDER_STYLE,
  PANEL_BORDER_WIDTH,
} from './constants'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import React, { useCallback } from 'react'
import { setShowNavigationMenu } from '../../redux/screenSlice'

const Header = () => {
  const dispatch = useAppDispatch()
  const showMobileLayout = useAppSelector((s) => s.screen.showMobileLayout)

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
        <Typography>{document.title}</Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
