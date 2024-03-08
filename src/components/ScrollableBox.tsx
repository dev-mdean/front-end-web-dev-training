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
        overflowY: 'scroll',
        '::-webkit-scrollbar': {
          transition: '2s',
          width: hover ? '9px' : '0px',
        },
        '::-webkit-scrollbar-track': {
          background: '#FFFFFF10',
        },
        '::-webkit-scrollbar-thumb': {
          background: '#FFFFFF80',
          borderRadius: '9px',
        },
        '::-webkit-scrollbar-thumb:hover': {
          background: '#FFFFFF60',
        },
      }}
    >
      {children}
    </Box>
  )
}

export default ScrollableBox
