import { Page, findPageByName, pagePaths } from '.'
import { generatePathTo } from '../components/routes'

const testPage1FolderPath = pagePaths.home
const testPage1: Page = {
  path: generatePathTo.page(testPage1FolderPath),
  title: 'Test 1',
}

const testSubPageFolderName = pagePaths.training
const testSubPage1FileName = 'sub-page-1.md'
const testSubPage1: Page = {
  path: generatePathTo.page(testSubPageFolderName, testSubPage1FileName),
  title: 'Sub 1',
}
const testSubPage2FileName = 'sub-page-2.md'
const testSubPage2: Page = {
  path: generatePathTo.page(testSubPageFolderName, testSubPage2FileName),
  title: 'Sub 2',
}

const testPage2: Page = {
  path: generatePathTo.page(testSubPageFolderName),
  subPages: [testSubPage1, testSubPage2],
  title: 'Test 2',
}

const testPages: Page[] = [testPage1, testPage2]

describe('findPageByName', () => {
  it('should return undefined if folder or file name are undefined', () => {
    const page1 = findPageByName(testPages)
    expect(page1).toEqual(undefined)

    const page2 = findPageByName(testPages, undefined)
    expect(page2).toEqual(undefined)

    const page3 = findPageByName(testPages, undefined, undefined)
    expect(page3).toEqual(undefined)
  })

  it('should return page if it exists', () => {
    const page1 = findPageByName(testPages, testPage1FolderPath)
    expect(page1).toEqual(testPage1)

    const page2 = findPageByName(testPages, testSubPageFolderName)
    expect(page2).toEqual(testPage2)
  })

  it('should return sub page if it exists', () => {
    const page1 = findPageByName(
      testPages,
      testSubPageFolderName,
      testSubPage1FileName
    )

    expect(page1).toEqual(testSubPage1)

    const page2 = findPageByName(
      testPages,
      testSubPageFolderName,
      testSubPage2FileName
    )
    expect(page2).toEqual(testSubPage2)
  })
})
