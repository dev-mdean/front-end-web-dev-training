import Box from '@mui/material/Box'
import { SxProps, Theme } from '@mui/material/styles'
import { useCallback, useState } from 'react'

type ScrollableBoxProps = {
  children: React.ReactNode
  sx: SxProps<Theme>
}

const ScrollableBox = ({ children, sx }: ScrollableBoxProps) => {
  const [hover, setHover] = useState(false)

  const handlePointerEnter = useCallback(() => {
    setHover(true)
  }, [])

  const handlePointerLeave = useCallback(() => {
    setHover(false)
  }, [])

  return (
    <Box
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      sx={{
        ...sx,
        height: '85vh',
        overflowY: 'scroll',
        '::-webkit-scrollbar': {
          width: '9px',
        },
        '::-webkit-scrollbar-track': {
          background: hover ? '#FFFFFF10' : 'transparent',
        },
        '::-webkit-scrollbar-thumb': {
          background: hover ? '#FFFFFF80' : 'transparent',
          borderRadius: '9px',
        },
        '::-webkit-scrollbar-thumb:hover': {
          background: hover ? '#FFFFFF60' : 'transparent',
        },
      }}
    >
      {children}
    </Box>
  )
}

export default ScrollableBox
