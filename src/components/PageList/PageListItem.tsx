import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { useCallback } from 'react'

type PageListItemProps = {
  onClick?: (event: React.SyntheticEvent, value: string) => any
  selected: boolean
  value: string
}

const PageListItem = ({ onClick, selected, value }: PageListItemProps) => {
  const handleClick = useCallback(
    (event: React.SyntheticEvent) => {
      event.stopPropagation()
      onClick?.(event, value)
    },
    [onClick, value]
  )

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={handleClick} selected={selected}>
        <ListItemIcon>
          {selected ? (
            <KeyboardArrowDownIcon fontSize='small' />
          ) : (
            <KeyboardArrowRightIcon color='primary' fontSize='small' />
          )}
        </ListItemIcon>
        <ListItemText primary={value} />
      </ListItemButton>
    </ListItem>
  )
}

export default PageListItem
