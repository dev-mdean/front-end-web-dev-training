import List from '@mui/material/List'
import PageListItem from './PageListItem'
import { useCallback, useState } from 'react'

const ITEMS: string[] = ['Item 1', 'Item 2', 'Item 3']

const PageList = () => {
  const [selectedItem, setSelectedItem] = useState<string>()

  const handleClick = useCallback(
    (event: React.SyntheticEvent, value: string) => {
      setSelectedItem(value)
    },
    []
  )

  return (
    <List disablePadding>
      {ITEMS.map((item) => (
        <PageListItem
          onClick={handleClick}
          selected={item === selectedItem}
          value={item}
        />
      ))}
    </List>
  )
}

export default PageList
