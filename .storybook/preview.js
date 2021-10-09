// Import the global style enabling tailwind classes
import '../styles/global.css'
//overide so that next image component loads properly details https://javascript.plainenglish.io/next-js-storybook-3f8e5a8dab3d
import * as nextImage from 'next/image'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}