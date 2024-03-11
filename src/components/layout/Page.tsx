import React, { useEffect, useMemo, useState } from 'react'
import { MuiMarkdown } from 'mui-markdown'
import mdPath from '../../md-files/training/training-notes.md'
import { Link as RouterLink } from 'react-router-dom'
import { Link } from '@mui/material'

const MdLink = ({
  href,
  children,
}: React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>): React.ReactElement<any, any> => {
  let to = href ?? '/'

  const target = useMemo(() => {
    const nonRelativeUrls = ['http', 'https']

    if (nonRelativeUrls.some((value) => href?.startsWith(value)))
      return '_blank'
    return '_self'
  }, [href])

  return (
    <Link component={RouterLink} target={target} to={to}>
      {children}
    </Link>
  )
}

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

  return (
    <MuiMarkdown
      options={{
        overrides: {
          a: MdLink,
        },
      }}
    >
      {md}
    </MuiMarkdown>
  )
}

export default Page
