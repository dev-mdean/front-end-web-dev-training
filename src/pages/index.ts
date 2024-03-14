import { generatePathTo } from '../components/routes'

export interface Page {
  path: string
  subPages?: Page[]
  title: string
}

export const pagePaths = {
  home: 'home',
  pages: 'pages',
  training: 'training',
}

export const pages: Page[] = [
  {
    path: pagePaths.home,
    title: 'Home',
  },
  {
    path: generatePathTo.page(pagePaths.training),
    subPages: [
      {
        path: generatePathTo.page(pagePaths.training, 'training-notes.md'),
        title: 'Training Notes',
      },
    ],
    title: 'Training',
  },
]

export const findPage = (folderName?: string, fileName?: string) => {
  const folderPage = pages.find(
    (page) => page.path === folderName || page.path === fileName
  )

  if (!fileName) return folderPage

  const filePage = folderPage?.subPages?.find(
    (subPage) => subPage.path === generatePathTo.page(fileName, folderName)
  )

  return filePage
}
