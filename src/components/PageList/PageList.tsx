import List from '@mui/material/List'
import PageListItem from './PageListItem'
import { useAppSelector } from '../../redux/hooks'

const ITEMS: string[] = ['Item 1', 'Item 2', 'Item 3']

const PageList = () => {
  const selectedPage = useAppSelector((s) => s.pages.selectedPage)

  return (
    <List disablePadding>
      {ITEMS.map((item) => (
        <PageListItem selected={item === selectedPage} value={item} />
      ))}
    </List>
  )
}

export default PageList
