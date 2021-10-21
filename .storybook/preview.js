import '../styles/global.css';
import '../styles/utils.module.css';
//overide so that next image component loads properly details https://javascript.plainenglish.io/next-js-storybook-3f8e5a8dab3d
import * as NextImage from 'next/image';

// stolen from https://dev.to/jonasmerlin/how-to-use-the-next-js-image-component-in-storybook-1415
const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
