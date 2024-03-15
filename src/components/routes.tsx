import { generatePath } from 'react-router-dom'
import MarkdownPage from './Pages/MarkdownPage'
import HomePage from './Pages/HomePage'
import InvalidRoutePage from './Pages/InvalidRoutePage'

export const dynamicSegments = {
  pageFileName: 'fileName',
  pageFolderName: 'folderName',
}

interface Route {
  component?: React.ReactNode
  path: string
  subRoutes?: { [key: string]: Route }
}

export const routeStrings = {
  home: 'home',
  pages: 'pages',
  training: 'training',
  folder: 'folder',
  file: 'file',
  invalid: 'invalid',
}

export type RouteString = keyof typeof routeStrings

export const routesDictionary: { [key in RouteString]?: Route } = {
  pages: {
    component: <MarkdownPage />,
    path: routeStrings.pages,
    subRoutes: {
      [routeStrings.folder]: {
        component: <HomePage />,
        path: `:${dynamicSegments.pageFolderName}`,
      },
      [routeStrings.file]: {
        path: `:${dynamicSegments.pageFolderName}/page/:${dynamicSegments.pageFileName}`,
      },
    },
  },
  invalid: {
    component: <InvalidRoutePage />,
    path: routeStrings.invalid,
  },
}

export const routes = Object.values(routesDictionary)

export const generatePathTo = {
  page: (folderName: string, fileName?: string) => {
    if (!fileName) {
      return generatePath(
        `/${routesDictionary.pages!.path}/${
          routesDictionary.pages!.subRoutes![routeStrings.folder].path
        }`,
        {
          [dynamicSegments.pageFolderName]: folderName,
        }
      )
    }

    return generatePath(
      `/${routesDictionary.pages!.path}/${
        routesDictionary.pages!.subRoutes![routeStrings.file].path
      }`,
      {
        [dynamicSegments.pageFileName]: fileName,
        [dynamicSegments.pageFolderName]: folderName,
      }
    )
  },
}
