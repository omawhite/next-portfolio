import remark from 'remark';
import html from 'remark-html';

/**
 * Converts markdown content into an html string for rendering
 * @param {*} markdownContent
 * @returns
 */
export async function markdownContentToHTML(markdownContent) {
  const processedContent = await remark().use(html).process(markdownContent);
  return processedContent.toString();
}
