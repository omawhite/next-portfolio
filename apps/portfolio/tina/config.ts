import { defineConfig } from 'tinacms';

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  'main';

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: '',
      publicFolder: 'public',
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: 'post',
        label: 'Posts',
        path: 'content/posts',
        format: 'md',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'datetime',
            name: 'date',
            label: 'Date',
            required: true,
          },
          {
            type: 'datetime',
            name: 'lastUpdated',
            label: 'Last Updated',
          },
          {
            name: 'description',
            type: 'string',
            label: 'Description',
            required: true,
          },
          {
            type: 'image',
            name: 'featuredImage',
            label: 'Featured Image',
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
          },
        ],
        ui: {
          //makes it so that the preview shows my post in context of the site
          router: ({ document }) => `/posts/${document._sys.filename}`,
        },
      },
      {
        name: 'page',
        label: 'Pages',
        path: 'content/pages',
        format: 'md',
        ui: {
          router: ({ document }) => {
            if (document._sys.filename === 'home') {
              return '/';
            }
            return `/${document._sys.filename}`;
          },
        },
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            required: true,
          },
          {
            type: 'string',
            name: 'description',
            label: 'Description',
          },
          {
            type: 'object',
            name: 'blocks',
            label: 'Blocks',
            list: true,
            templates: [
              {
                name: 'bio',
                label: 'Bio',
                fields: [
                  {
                    type: 'rich-text',
                    name: 'text',
                    label: 'Text',
                  },
                ],
              },
            ],
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
          },
        ],
      },
    ],
  },
});
