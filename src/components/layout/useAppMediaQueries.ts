import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useEffect } from 'react'
import { useAppDispatch } from '../../redux/hooks'
import { setShowMobileLayout } from '../../redux/screenSlice'

const useAppMediaQueries = () => {
  const dispatch = useAppDispatch()
  const theme = useTheme()
  const showMobileLayout = useMediaQuery(theme.breakpoints.down('lg'))

  useEffect(() => {
    dispatch(setShowMobileLayout(showMobileLayout))
  }, [dispatch, showMobileLayout])
}

export default useAppMediaQueries
