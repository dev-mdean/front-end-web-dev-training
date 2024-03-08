import List from '@mui/material/List'
import PageListItem from './PageListItem'

const ITEMS: string[] = ['Item 1', 'Item 2', 'Item 3']

const PageList = () => {
  return (
    <List disablePadding>
      {ITEMS.map((item) => (
        <PageListItem value={item} />
      ))}
    </List>
  )
}

export default PageList
