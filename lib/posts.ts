import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { markdownContentToHTML } from './markdown';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName: string) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      ...matterResult.data,
      id,
      content: matterResult.content,
      // need to do a json.stringify and parse here for the date fields i think, https://stackoverflow.com/questions/70449092/reason-object-object-date-cannot-be-serialized-as-json-please-only-ret
      date: JSON.parse(JSON.stringify(matterResult.data.date)),
      lastUpdated: JSON.parse(JSON.stringify(matterResult.data.lastUpdated)),
    };
  });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    return a.date < b.date ? 1 : a.date > b.date ? -1 : 0;
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName: string) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const contentHtml = await markdownContentToHTML(matterResult.content);

  return {
    id,
    contentHtml,
    ...(matterResult.data as { date: string }),
  };
}

// /**
//  * Converts markdown content into an html string for rendering
//  * @param {*} markdownContent
//  * @returns
//  */
// export async function markdownContentToHTML(markdownContent: string) {
//   const processedContent = await remark().use(html).process(markdownContent);
//   return processedContent.toString();
// }
