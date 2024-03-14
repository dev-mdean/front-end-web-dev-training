import { generatePath } from 'react-router-dom'
import MarkdownPage from './MarkdownPage'
import HomePage from './HomePage'

export const dynamicSegments = {
  fileName: 'fileName',
  folderName: 'folderName',
}

interface Route {
  component?: React.ReactNode
  path: string
  subRoutes?: { [key: string]: Route }
}

export const routesDictionary = {
  pages: {
    component: <MarkdownPage />,
    path: 'pages',
    subRoutes: {
      home: {
        component: <HomePage />,
        path: 'home',
      } as Route,
      folder: {
        component: <HomePage />,
        path: `:${dynamicSegments.folderName}`,
      } as Route,
      file: {
        path: `:${dynamicSegments.folderName}/:${dynamicSegments.fileName}`,
      } as Route,
    },
  } as Route,
}

export const routes = Object.values(routesDictionary)

export const generatePathTo = {
  page: (folderName: string, fileName?: string) => {
    if (!fileName) {
      return generatePath(
        `${routesDictionary.pages.path}/${
          routesDictionary.pages.subRoutes!.folder.path
        }`,
        {
          [dynamicSegments.folderName]: folderName,
        }
      )
    }

    return generatePath(
      `${routesDictionary.pages.path}/${
        routesDictionary.pages.subRoutes!.file.path
      }`,
      {
        [dynamicSegments.fileName]: fileName,
        [dynamicSegments.folderName]: folderName,
      }
    )
  },
}
