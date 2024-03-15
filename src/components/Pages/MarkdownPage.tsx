import React, { useEffect, useMemo, useState } from 'react'
import { MuiMarkdown } from 'mui-markdown'
import { Link as RouterLink } from 'react-router-dom'
import { useAppSelector } from '../../redux/hooks'
import ScrollableBox from '../ScrollableBox'
import PageHeader from './PageHeader'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'

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
  const selectedPage = useAppSelector((s) => s.pages.selectedFile)

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
    <Box display='flex' flexDirection='column' width={1}>
      <PageHeader
        title={selectedPage?.title}
        sx={{
          backgroundColor: selectedPage?.accentColor ?? 'primary.dark',
          p: 2,
        }}
      />
      <ScrollableBox
        sx={{
          backgroundColor: 'transparent',
          flexGrow: 1,
          p: 2,
        }}
      >
        <MuiMarkdown
          options={{
            overrides: {
              a: MarkdownLink,
            },
          }}
        >
          {md}
        </MuiMarkdown>
      </ScrollableBox>
    </Box>
  )
}

export default MdPage
