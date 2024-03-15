import { RouteString, generatePathTo, routeStrings } from '../components/routes'

export interface Page {
  path: string
  subPages?: Page[]
  title: string
}

export const pageDictionary: { [key in RouteString]?: Page } = {
  home: {
    path: generatePathTo.page(routeStrings.home),
    title: 'Home',
  },
  training: {
    path: generatePathTo.page(routeStrings.training),
    subPages: [
      {
        path: generatePathTo.page(routeStrings.training, 'training-notes.md'),
        title: 'Training Notes',
      },
    ],
    title: 'Training',
  },
}

export const pages = Object.values(pageDictionary)

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
