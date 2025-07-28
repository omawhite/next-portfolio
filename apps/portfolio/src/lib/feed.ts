import { Feed } from 'feed';
import fs from 'fs';

// Define the type for a blog post/article
interface BlogPost {
  title: string;
  date: string;
  id: string;
  description?: string;
  content: string;
}

// copied from https://ashleemboyer.com/how-i-added-an-rss-feed-to-my-nextjs-site
export const generateRSSFeed = (articles: BlogPost[]): void => {
  const baseUrl = 'https://louiswhite.me';
  const author = {
    name: 'Omar Louis White',
    link: 'https://twitter.com/louiswhite3019',
  };

  // Construct a new Feed object
  const feed = new Feed({
    title: 'Articles by Omar Louis White',
    description: 'The feed for my blog',
    id: baseUrl,
    link: baseUrl,
    language: 'en',
    feedLinks: {
      rss2: `${baseUrl}/rss.xml`,
      json1: `${baseUrl}/feed.json`,
    },
    author,
    copyright: `All rights reserved ${new Date().getFullYear()}, Omar Louis White`,
  });

  // Add each article to the feed
  articles.forEach((post) => {
    const { title, date, id, description, content } = post;
    const url = `${baseUrl}/${id}`;

    feed.addItem({
      title,
      id,
      link: url,
      description,
      content,
      author: [author],
      date: new Date(date),
    });
  });

  // Write the RSS output to a public file, making it
  // accessible at site-name.com/rss.xml
  fs.writeFileSync('public/rss.xml', feed.rss2());
  // I think generating a json feed is causing some issues so I'm commenting this out till I feel like figuring it out
  // fs.writeFileSync('public/feed.json', feed.json1());
};
