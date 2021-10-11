// copied from https://ashleemboyer.com/how-i-added-an-rss-feed-to-my-nextjs-site
const generateRSSFeed = (articles) => {
  const baseUrl = 'https://louiswhite.me'
  const author = {
    name: 'Omar Louis White',
    link: 'https://twitter.com/louiswhite3019',
  }

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
  })

  // Add each article to the feed
  articles.forEach((post) => {
    const {
      content,
      fileName,
      meta: { date, description, title },
    } = post
    const url = `${baseUrl}/${fileName}`

    feed.addItem({
      title,
      id: url,
      link: url,
      description,
      content,
      author: [author],
      date: new Date(date),
    })
  })

  // Write the RSS output to a public file, making it
  // accessible at ashleemboyer.com/rss.xml
  fs.writeFileSync('public/rss.xml', feed.rss2())
  fs.writeFileSync('public/feed.json', feed.json1())
}
