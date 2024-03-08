import List from '@mui/material/List'
import PageListItem from './PageListItem'

const ITEMS: string[] = ['Item 1', 'Item 2', 'Item 3']

export const PAGE_LIST_WIDTH = '18rem'

const PageList = () => {
  return (
    <List disablePadding sx={{ width: PAGE_LIST_WIDTH }}>
      {ITEMS.map((item) => (
        <PageListItem value={item} />
      ))}
    </List>
  )
}

export default PageList
