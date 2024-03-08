import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { useCallback } from 'react'
import { useAppDispatch } from '../../redux/hooks'
import { setSelectedPage } from '../../redux/pagesSlice'

type PageListItemProps = {
  onClick?: (event: React.SyntheticEvent, value: string) => any
  selected: boolean
  value: string
}

const PageListItem = ({ onClick, selected, value }: PageListItemProps) => {
  const dispatch = useAppDispatch()

  const handleClick = useCallback(
    (event: React.SyntheticEvent) => {
      event.stopPropagation()
      dispatch(setSelectedPage(value))
      onClick?.(event, value)
    },
    [dispatch, onClick, value]
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
