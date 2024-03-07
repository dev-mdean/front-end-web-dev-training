import List from '@mui/material/List'
import PageListItem from './PageListItem'

const PageList = () => {
  return (
    <List disablePadding>
      <PageListItem text='Item 1' />
      <PageListItem text='Item 2' />
      <PageListItem text='Item 3' />
    </List>
  )
}

export default PageList
