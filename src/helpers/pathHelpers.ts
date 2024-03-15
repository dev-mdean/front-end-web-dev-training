export const convertPathToFileName = (path: string) => {
  let fileName = path.substring(path.lastIndexOf('/') + 1)

  return (
    fileName.substring(0, fileName.indexOf('.')) +
    fileName.substring(fileName.lastIndexOf('.'))
  )
}
