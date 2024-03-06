import Paper from '@mui/material/Paper'
import Page from './Page'
import LeftPanel from './LeftPanel'

const Body = () => {
  return (
    <Paper elevation={0} sx={{ display: 'flex', height: 1 }}>
      <LeftPanel />
      <Page />
    </Paper>
  )
}

export default Body
