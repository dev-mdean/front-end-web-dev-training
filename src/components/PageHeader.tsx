import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { SxProps, Theme } from '@mui/material/styles'
import React from 'react'

type Props = {
  sx?: SxProps<Theme>
  title?: string
}

const PageHeader = ({ sx, title }: Props) => {
  return (
    <Box sx={sx}>{title && <Typography variant='h3'>{title}</Typography>}</Box>
  )
}

export default PageHeader
