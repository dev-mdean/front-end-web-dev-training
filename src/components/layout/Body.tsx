import { useEffect, useState } from 'react'
import { MuiMarkdown } from 'mui-markdown'
import Paper from '@mui/material/Paper'
import mdPath from '../../training-notes.md'

const Body = () => {
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
    <Paper>
      <MuiMarkdown>{md}</MuiMarkdown>
    </Paper>
  )
}

export default Body
