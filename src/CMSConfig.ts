import type { Config } from '@staticcms/core';

const CMSConfig: Config = {
  backend: {
    name: 'git-gateway',
    branch: 'main',
  },
  publish_mode: 'editorial_workflow',
  site_url: 'https://www.louiswhite.me',
  display_url: 'https://louiswhite.me',
  media_folder: 'public/media',
  public_folder: 'public',
  collections: [
    {
      name: 'posts',
      label: 'Posts',
      folder: '/posts',
      create: true,
      fields: [
        { label: 'Title', name: 'title', widget: 'string' },
        {
          label: 'Publish date',
          name: 'date',
          widget: 'datetime',
          format: 'yyyy-MM-dd',
          date_format: 'yyyy-MM-dd',
          time_format: false,
        },
        {
          label: 'Last updated',
          name: 'lastUpdated',
          widget: 'datetime',
          format: 'yyyy-MM-dd',
          date_format: 'yyyy-MM-dd',
          time_format: false,
          default: '',
          required: false,
        },
        {
          label: 'Description',
          name: 'description',
          widget: 'text',
        },
        {
          label: 'Content',
          name: 'body',
          widget: 'markdown',
        },
      ],
    },
    {
      name: 'pages',
      label: 'Pages',
      files: [
        {
          label: 'Home Page Content',
          name: 'home',
          file: 'content/home.md',
          fields: [
            {
              label: 'Page title',
              name: 'title',
              widget: 'string',
              required: true,
            },
            {
              label: 'Bio content',
              name: 'bio',
              widget: 'markdown',
              required: true,
            },
          ],
        },
      ],
    },
  ],
};

export default CMSConfig;
