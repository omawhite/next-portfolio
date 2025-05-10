import remark from 'remark';
import html from 'remark-html';

/**
 * Converts markdown content into an html string for rendering
 * @param {*} markdownContent
 * @returns
 */
export async function markdownContentToHTML(markdownContent) {
  //@ts-expect-error not sure why this is cause a typescript error but it works.
  const processedContent = await remark().use(html).process(markdownContent);
  return processedContent.toString();
}
