import { useNavigate, useParams } from 'react-router-dom'
import { dynamicSegments, routesDictionary } from '../components/routes'
import { useEffect } from 'react'
import { useAppDispatch } from '../redux/hooks'
import { setSelectedPage } from '../redux/pagesSlice'
import { findAppPageByName } from '../pages'

const useAppUrlParams = () => {
  const {
    [dynamicSegments.pageFileName]: fileName,
    [dynamicSegments.pageFolderName]: folderName,
  } = useParams()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    let page = findAppPageByName(folderName, fileName)

    if (!page && (folderName || fileName)) {
      navigate(routesDictionary.invalid!.path)
    }

    dispatch(setSelectedPage(page))
  }, [dispatch, fileName, folderName, navigate])
}

export default useAppUrlParams
