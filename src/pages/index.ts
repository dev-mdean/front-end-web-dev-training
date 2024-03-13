import { generatePathTo } from '../components/routes'

export interface Page {
  path: string
  title: string
}

export const pages: Page[] = [
  {
    path: '/',
    title: 'Home',
  },
  {
    path: generatePathTo.docsFile('training', 'training-notes.md'),
    title: 'Training Notes',
  },
]
