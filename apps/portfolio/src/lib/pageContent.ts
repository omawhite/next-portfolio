import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { markdownContentToHTML } from './markdown';

const contentDirectory = path.join(process.cwd(), 'content');
const homepageContentFileName = 'home.md';

/**
 * Funtion to get the content data for home page
 */
export async function getHomePageContentData() {
  const fullPath = path.join(contentDirectory, homepageContentFileName);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);
  const contentHtml = await markdownContentToHTML(matterResult.content || '');

  return {
    pageTitle: matterResult.data.title,
    contentHtml,
  };
}
