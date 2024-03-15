import { RouteString, generatePathTo, routeStrings } from '../components/routes'
import { convertPathToFileName } from '../helpers/pathHelpers'
import day1Training from './training/day-1-training.md'
import resources from './training/resources.md'
import soloTrainingProject from './training/solo-training-project.md'

export interface Page {
  accentColor?: string
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
        accentColor: 'goldenrod',
        content: day1Training,
        path: generatePathTo.page(
          routeStrings.training,
          convertPathToFileName(day1Training)
        ),
        title: 'Day 1 Training',
      },
      {
        accentColor: 'slateblue',
        content: soloTrainingProject,
        path: generatePathTo.page(
          routeStrings.training,
          convertPathToFileName(soloTrainingProject)
        ),
        title: 'Solo Training Project',
      },
      {
        accentColor: 'seagreen',
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

export interface PageResult {
  file?: Page
  folder?: Page
}

export const findAppPageByName = (folderName?: string, fileName?: string) =>
  findPageByName(pages, folderName, fileName)
export const findPageByName = (
  pages: Page[],
  folderName?: string,
  fileName?: string
): PageResult => {
  let folder: Page | undefined

  if (folderName) {
    folder = pages.find((page) => page.path === generatePathTo.page(folderName))
  }

  if (!fileName) return { file: folder }

  let file: Page | undefined

  if (folderName && fileName) {
    file = folder?.subPages?.find(
      (subPage) => subPage.path === generatePathTo.page(folderName, fileName)
    )
  }

  return {
    file,
    folder,
  }
}
