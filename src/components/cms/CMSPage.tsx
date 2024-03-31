import CMS from '@staticcms/core';
import '@staticcms/core/dist/main.css';
import { useEffect } from 'react';

import CMSConfig from '@/CMSConfig';

import type { TemplatePreviewProps } from '@staticcms/core';
import type { FC } from 'react';

interface PostData {
  title: string;
  date: string;
  body: string;
}

const PostPreview: FC<TemplatePreviewProps<PostData>> = ({
  entry,
  widgetFor,
}) => {
  return (
    <div className="content">
      <h1>{entry.data?.title}</h1>
      <time>{entry.data?.date}</time>
      <div>{widgetFor('body')}</div>
    </div>
  );
};

const CMSPage: FC = () => {
  useEffect(() => {
    //Exit early if CMS stuff is already registered
    const root = document.getElementById('cms-root');
    if (root) {
      return;
    }

    //Handle if we are in development mode
    if (process.env.NODE_ENV === 'development') {
      CMSConfig.local_backend = true;
      CMSConfig.base_url = 'http://localhost:3000';
    }

    //Register CMS stuff
    CMS.registerPreviewTemplate('posts', PostPreview);

    CMS.registerAdditionalLink({
      id: 'external-link',
      title: 'External link',
      data: 'https://example.com/',
    });

    CMS.init({ config: CMSConfig });
  }, []);

  return (
    <div>
      <style jsx global>{`
        html,
        body {
          height: 100%;
        }

        #__next {
          display: none;
        }
      `}</style>
    </div>
  );
};

CMSPage.displayName = 'CMSPage';

export default CMSPage;
