import Box from '@mui/material/Box'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Header from './Header'
import { MuiMarkdown } from 'mui-markdown'
import Paper from '@mui/material/Paper'
import mdPath from './training-notes.md'
import { useEffect, useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

function App() {
  const [md, setMd] = useState('')

  useEffect(() => {
    fetch(mdPath).then((response) => {
      if (!response.ok) return

      response.text().then((text) => {
        setMd(text)
      })
    })
  }, [])

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          height: 1,
          width: 1,
        }}
      >
        <Header />
        <Box sx={{ flexGrow: 1 }}>
          <Paper>
            <MuiMarkdown>{md}</MuiMarkdown>
          </Paper>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App
