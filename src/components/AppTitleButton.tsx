import Link from '@mui/material/Link'

const AppTitleButton = () => {
  return (
    <Link color='inherit' href='/' underline='hover' sx={{ color: 'white' }}>
      {document.title}
    </Link>
  )
}

export default AppTitleButton
