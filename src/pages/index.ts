import { generatePathTo } from '../components/routes'

export interface Page {
  path: string
  subPages?: Page[]
  title: string
}

export const pages: Page[] = [
  {
    path: '/',
    title: 'Home',
  },
  {
    path: '/',
    subPages: [
      {
        path: generatePathTo.docsFile('training', 'training-notes.md'),
        title: 'Training Notes',
      },
    ],
    title: 'Training',
  },
]
