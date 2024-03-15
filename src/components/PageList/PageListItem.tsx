import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import CircleIcon from '@mui/icons-material/Circle'
import { useCallback, useMemo } from 'react'
import { useAppSelector } from '../../redux/hooks'
import {
  selectIsSelectedPage,
  selectIsSubPageSelected,
} from '../../redux/pagesSlice'
import { useNavigate } from 'react-router-dom'
import { Page } from '../../pages'
import Collapse from '@mui/material/Collapse'
import List from '@mui/material/List'
import Icon from '@mui/material/Icon'

type PageListItemProps = {
  level?: number
  onClick?: (page: Page) => any
  page: Page
}

const PageListItem = ({ level = 1, onClick, page }: PageListItemProps) => {
  const navigate = useNavigate()
  const isSelected = useAppSelector(selectIsSelectedPage(page))
  const isSubPageSelected = useAppSelector(selectIsSubPageSelected(page))

  const handleClick = useCallback(
    (event: React.SyntheticEvent) => {
      event.stopPropagation()
      navigate(page.path)
      onClick?.(page)
    },
    [navigate, onClick, page]
  )

  const icon = useMemo(() => {
    if (page.subPages) {
      return isSelected ? (
        <KeyboardArrowDownIcon fontSize='small' />
      ) : (
        <KeyboardArrowRightIcon color='primary' fontSize='small' />
      )
    } else {
      return (
        <Icon
          fontSize='small'
          sx={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <CircleIcon
            color={isSelected ? undefined : 'primary'}
            sx={{ fontSize: '0.5rem' }}
          />
        </Icon>
      )
    }
  }, [isSelected, page.subPages])

  return (
    <>
      <ListItem disablePadding>
        <ListItemButton
          disableGutters
          onClick={handleClick}
          selected={isSelected && !isSubPageSelected}
          sx={{ px: level }}
        >
          <ListItemIcon sx={{ minWidth: 'unset', pr: 1 }}>{icon}</ListItemIcon>
          <ListItemText primary={page.title} />
        </ListItemButton>
      </ListItem>
      <Collapse in={isSelected || isSubPageSelected}>
        {page.subPages && (
          <List disablePadding>
            {page.subPages.map((subpage, index) => (
              <PageListItem
                key={index}
                level={level + 2}
                onClick={onClick}
                page={subpage}
              />
            ))}
          </List>
        )}
      </Collapse>
    </>
  )
}

export default PageListItem
