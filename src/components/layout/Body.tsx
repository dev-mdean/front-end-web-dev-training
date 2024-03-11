import React from 'react'
import LeftPanel from './LeftPanel'
import Box from '@mui/material/Box'
import ScrollableBox from '../ScrollableBox'
import { useAppSelector } from '../../redux/hooks'

export interface BodyProps {
  children?: React.ReactNode
  leftPanelChildren?: React.ReactNode
}

const Body = ({ children, leftPanelChildren }: BodyProps) => {
  const showMobileLayout = useAppSelector((s) => s.screen.showMobileLayout)

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: showMobileLayout ? 'column' : 'row',
        height: 1,
      }}
    >
      {!showMobileLayout && (
        <Box>
          <LeftPanel>{leftPanelChildren}</LeftPanel>
        </Box>
      )}
      <ScrollableBox
        sx={{
          backgroundColor: 'transparent',
          flexGrow: 1,
          p: 2,
        }}
      >
        {children}
      </ScrollableBox>
    </Box>
  )
}

export default Body
