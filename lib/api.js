import { remark } from "remark";
import html from "remark-html";
import remarkGfm from "remark-gfm";

const POST_GRAPHQL_FIELDS = `
    sys {
        id
    }  
    title
    date
    excerpt
    slug
    tags`;

/**
 * Connects to GraphQL API and returns all posts
 * @param {JSON} query
 * @param {Boolean} preview
 * @return {JSON} GraphQL Response
 */
async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/3se29gd38lrl/environments/master`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json());
}

/**
 * Query to get all posts
 * @param {Boolean} preview
 * @return {Array} Posts Data
 */
export async function getAllPostsForHome(preview) {
  const entries = await fetchGraphQL(
    `query {
        blogPostCollection(order: date_DESC, preview: ${
          preview ? "true" : "false"
        }) {
            items {
            ${POST_GRAPHQL_FIELDS}
            }
        }
        }`,
    preview
  );
  return extractPostEntries(entries);
}

/**
 * Fetching all posts
 * @param {JSON} fetchResponse
 * @return {JSON} Posts Entries
 */
function extractPostEntries(fetchResponse) {
  return fetchResponse?.data?.blogPostCollection?.items;
}

/**
 * Fetching a single post
 * @param {JSON} fetchResponse
 * @return {JSON} Posts Entries
 */
function extractPost(fetchResponse) {
  return fetchResponse?.data?.blogPost;
}

/**
 * Query a single post by id
 * @param {boolean} preview
 * @param {String} postId
 * @return {JSON} Single post data
 */
export async function getPost(preview, postId) {
  // Get a singlepost/entry
  const entry = await fetchGraphQL(
    `query{
            blogPost(id:"${postId}",preview:${
      preview ? true : false
    }){                
                ${POST_GRAPHQL_FIELDS}                
            }
        }`
  );

  const postData = extractPost(entry);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .use(remarkGfm)
    .process(postData.excerpt);
  const contentHtml = processedContent.toString();
  return {
    postData: {
      ...postData,
      contentHtml,
    },
  };
}
