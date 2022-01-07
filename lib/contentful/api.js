import { remark } from "remark";
import html from "remark-html";
import remarkGfm from "remark-gfm";
import { POST_GRAPHQL_FIELDS } from "./config.js";

/**
 * Connects to GraphQL API and returns all posts
 * @param {JSON} query
 * @param {Boolean} preview
 * @return {JSON} GraphQL Response
 */
async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}`,
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
 * @return {Array} Posts Data Entries
 */
export async function getAllPosts(preview) {
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

  const AllPostData = entries.data?.blogPostCollection?.items;
  return AllPostData;
}

/**
 * Query a single post by id
 * @param {Boolean} preview
 * @param {String} postId
 * @return {Object} Single post data
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

  const postData = entry.data?.blogPost;

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
