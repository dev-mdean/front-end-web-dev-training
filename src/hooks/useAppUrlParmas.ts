import { useNavigate, useParams } from 'react-router-dom'
import { dynamicSegments, routesDictionary } from '../components/routes'
import { useEffect } from 'react'
import { useAppDispatch } from '../redux/hooks'
import { findAppPageByName } from '../pages'
import { setSelected } from '../redux/pagesSlice'

const useAppUrlParams = () => {
  const {
    [dynamicSegments.pageFileName]: fileName,
    [dynamicSegments.pageFolderName]: folderName,
  } = useParams()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    let { file, folder } = findAppPageByName(folderName, fileName)

    const invalidFolderName = !folder && !file && folderName
    const invalidFileName = !file && fileName

    if (invalidFolderName || invalidFileName) {
      navigate(routesDictionary.invalid!.path, { replace: true })
    }

    dispatch(setSelected({ file, folder }))
  }, [dispatch, fileName, folderName, navigate])
}

export default useAppUrlParams
