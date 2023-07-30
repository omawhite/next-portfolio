import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { markdownContentToHTML } from './markdown';

const contentDirectory = path.join(process.cwd(), 'content');

/**
 * Funtion to get the content data for home page
 */
export function getHomePageContentData() {
  const homepageContentFileName = 'home.md';
  const fullPath = path.join(contentDirectory, homepageContentFileName);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);
  const bioContentHtml = markdownContentToHTML(matterResult.data.bioContent || '')

  return {
    siteTitle: matterResult.data.title,
    bioContentHtml
  }
}