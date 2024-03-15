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
    path: generatePathTo.page(pagePaths.home),
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

export const findAppPageByName = (folderName?: string, fileName?: string) =>
  findPageByName(pages, folderName, fileName)
export const findPageByName = (
  pages: Page[],
  folderName?: string,
  fileName?: string
) => {
  let folderPage: Page | undefined

  if (folderName) {
    folderPage = pages.find(
      (page) => page.path === generatePathTo.page(folderName)
    )
  }

  if (!fileName) return folderPage

  let filePage: Page | undefined

  if (folderName && fileName) {
    filePage = folderPage?.subPages?.find(
      (subPage) => subPage.path === generatePathTo.page(folderName, fileName)
    )
  }

  return filePage ?? folderPage
}
