import { useParams } from 'react-router-dom'
import { dynamicSegments } from '../components/routes'
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

  useEffect(() => {
    console.log(
      'finding page %s/%s',
      folderName,
      fileName,
      findAppPageByName(folderName, fileName)
    )

    dispatch(setSelectedPage(findAppPageByName(folderName, fileName)))
  }, [dispatch, fileName, folderName])
}

export default useAppUrlParams
