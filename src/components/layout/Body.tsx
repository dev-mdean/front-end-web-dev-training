import Paper from '@mui/material/Paper'
import Page from './Page'
import LeftPanel from './LeftPanel'
import Box from '@mui/material/Box'

const Body = () => {
  return (
    <Box sx={{ display: 'flex', height: 1 }}>
      <Box>
        <LeftPanel />
      </Box>
      <Paper
        elevation={0}
        sx={{
          backgroundColor: 'transparent',
          flexGrow: 1,
          overflowY: 'scroll',
          p: 2,
        }}
      >
        <Page />
      </Paper>
    </Box>
  )
}

export default Body
