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
    //TODO: find a better way to type all your collections
    const matterData = matterResult.data as {
      date: Date;
      title: string;
      lastUpdated?: Date;
      //TODO: change this once I actually adds tags in the cms
      tags?: string[];
    };

    // Combine the data with the id
    return {
      id,
      content: matterResult.content,
      date: JSON.stringify(matterData.date),
      lastUpdated: JSON.stringify(matterData.lastUpdated) ?? '',
      title: matterData.title,
      //TODO: change this once I actually adds tags in the cms
      tags: matterData.tags ?? [],
      fullPath,
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
  //TODO: find a better way to type all your collections
  const matterData = matterResult.data as {
    date: Date;
    title: string;
    lastUpdated?: Date;
    //TODO: change this once I actually adds tags in the cms
    tags?: string[];
  };

  // Use remark to convert markdown into HTML string
  const contentHtml = await markdownContentToHTML(matterResult.content);

  return {
    id,
    title: matterData.title,
    tags: matterData.tags ?? [],
    date: JSON.stringify(matterData.date),
    lastUpdated: JSON.stringify(matterData.lastUpdated) ?? '',
    contentHtml,
  };
}
