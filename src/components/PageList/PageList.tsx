import List from '@mui/material/List'
import PageListItem from './PageListItem'
import { Page, pages } from '../../pages'

export const PAGE_LIST_WIDTH = '18rem'

interface PageListProps {
  onItemClicked?: (value: Page) => any
}

const PageList = ({ onItemClicked }: PageListProps) => {
  return (
    <List disablePadding sx={{ width: PAGE_LIST_WIDTH }}>
      {pages.map((page, index) => (
        <PageListItem key={index} onClick={onItemClicked} page={page} />
      ))}
    </List>
  )
}

export default PageList
