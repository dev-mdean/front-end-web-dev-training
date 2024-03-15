import React, { useEffect, useMemo, useState } from 'react'
import { MuiMarkdown } from 'mui-markdown'
import { Link as RouterLink } from 'react-router-dom'
import { Link } from '@mui/material'
import { useAppSelector } from '../redux/hooks'

const MarkdownLink = ({
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

const MdPage = () => {
  const [md, setMd] = useState('')
  const selectedPage = useAppSelector((s) => s.pages.selectedPage)

  useEffect(() => {
    if (!selectedPage) return

    fetch(selectedPage.content).then((response) => {
      if (!response.ok) return

      response.text().then((text) => {
        setMd(text)
      })
    })
  }, [selectedPage])

  return (
    <MuiMarkdown
      options={{
        overrides: {
          a: MarkdownLink,
        },
      }}
    >
      {md}
    </MuiMarkdown>
  )
}

export default MdPage
