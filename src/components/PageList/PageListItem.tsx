import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { selectIsSelectedPage, setSelectedPage } from '../../redux/pagesSlice'
import { useNavigate } from 'react-router-dom'
import { Page } from '../../pages'

type PageListItemProps = {
  onClick?: (page: Page) => any
  page: Page
}

const PageListItem = ({ onClick, page }: PageListItemProps) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const isSelected = useAppSelector(selectIsSelectedPage(page))

  const handleClick = useCallback(
    (event: React.SyntheticEvent) => {
      event.stopPropagation()
      dispatch(setSelectedPage(page))
      navigate(page.path)
      onClick?.(page)
    },
    [dispatch, navigate, onClick, page]
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
        <ListItemText primary={page.title} />
      </ListItemButton>
    </ListItem>
  )
}

export default PageListItem
