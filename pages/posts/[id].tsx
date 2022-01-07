import React from "react";
import Layout from "../../components/layout";
// import { getAllPostIds, getPostData } from "../../lib/post";
import { getPost, getAllPostsForHome } from "../../lib/api";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";
/**
 *  @param {JSON} post data
 * @return {JSX.Element} The JSX Code a Post Page
 */
export default function Post({ postData }: any) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

/**
 * @return {JSON}  Return a list of possible value for id
 */
export async function getStaticPaths() {
  const posts = await getAllPostsForHome(false);

  const paths = posts.map((post: any) => ({
    params: {
      id: post.sys.id.toString(),
    },
  }));
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}

/**
 *
 * @param {JSON} props
 * @return {JSON} necessary data for the blog post using params.id
 */
export async function getStaticProps({ params: { id } }: any) {
  const { postData }: any = await getPost(false, id);
  return {
    props: {
      postData,
    },
  };
}
