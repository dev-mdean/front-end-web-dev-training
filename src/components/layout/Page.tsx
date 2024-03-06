import { useEffect, useState } from 'react'
import { MuiMarkdown } from 'mui-markdown'
import mdPath from '../../md-files/training/training-notes.md'

const Page = () => {
  const [md, setMd] = useState('')

  useEffect(() => {
    fetch(mdPath).then((response) => {
      if (!response.ok) return

      response.text().then((text) => {
        setMd(text)
      })
    })
  }, [])

  return <MuiMarkdown>{md}</MuiMarkdown>
}

export default Page
