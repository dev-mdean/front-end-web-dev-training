import Paper from '@mui/material/Paper'
import Page from './Page'
import LeftPanel from './LeftPanel'
import Box from '@mui/material/Box'

const Body = () => {
  return (
    <Paper elevation={0} sx={{ display: 'flex', height: 1 }}>
      <Box sx={{ backgroundColor: 'grey', width: '20rem' }}>
        <LeftPanel />
      </Box>
      <Paper elevation={0} sx={{ flexGrow: 1, overflowY: 'scroll', p: 2 }}>
        <Page />
      </Paper>
    </Paper>
  )
}

export default Body
