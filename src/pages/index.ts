import { RouteString, generatePathTo, routeStrings } from '../components/routes'
import { convertPathToFileName } from '../helpers/pathHelpers'
import day1Training from './training/day-1-training.md'
import resources from './training/resources.md'
import soloTrainingProject from './training/solo-training-project.md'

export interface Page {
  content?: any
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
        content: day1Training,
        path: generatePathTo.page(
          routeStrings.training,
          convertPathToFileName(day1Training)
        ),
        title: 'Day 1 Training',
      },
      {
        content: soloTrainingProject,
        path: generatePathTo.page(
          routeStrings.training,
          convertPathToFileName(soloTrainingProject)
        ),
        title: 'Solo Training Project',
      },
      {
        content: resources,
        path: generatePathTo.page(
          routeStrings.training,
          convertPathToFileName(resources)
        ),
        title: 'Resources',
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
