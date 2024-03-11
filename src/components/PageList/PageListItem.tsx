import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { selectIsSelectedPage, setSelectedPage } from '../../redux/pagesSlice'

type PageListItemProps = {
  onClick?: (value: string) => any
  value: string
}

const PageListItem = ({ onClick, value }: PageListItemProps) => {
  const dispatch = useAppDispatch()
  const isSelected = useAppSelector(selectIsSelectedPage(value))

  const handleClick = useCallback(
    (event: React.SyntheticEvent) => {
      event.stopPropagation()
      dispatch(setSelectedPage(value))
      onClick?.(value)
    },
    [dispatch, onClick, value]
  )

  return (
    <ListItem disablePadding>
      <ListItemButton
        disableGutters
        onClick={handleClick}
        selected={isSelected}
        sx={{ px: 1 }}
      >
        <ListItemIcon sx={{ minWidth: 'unset', pr: 1 }}>
          {isSelected ? (
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
