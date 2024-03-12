import { generatePath } from 'react-router-dom'

export const dynamicSegments = {
  fileName: 'fileName',
  folderName: 'folderName',
}

export const routes = {
  docs: {
    root: 'docs',
    subRoutes: {
      file: `:${dynamicSegments.folderName}/:${dynamicSegments.fileName}`,
      folder: `:${dynamicSegments.folderName}`,
    },
  },
}

export const generatePathTo = {
  docsFile: (folderName: string, fileName: string) =>
    generatePath(`${routes.docs.root}/${routes.docs.subRoutes.file}`, {
      [dynamicSegments.fileName]: fileName,
      [dynamicSegments.folderName]: folderName,
    }),
  docsFolder: (folderName: string) =>
    generatePath(`${routes.docs.root}/${routes.docs.subRoutes.folder}`, {
      [dynamicSegments.folderName]: folderName,
    }),
}
