import Head from "next/head";
import Link from "next/link";
import React from "react";
import Layout, { siteTitle } from "../components/layout";
import { getAllPosts } from "../lib/contentful/api";
import utilStyles from "../styles/utils.module.css";
import Date from "../components/date";

/**
 *
 * @return {JSON} Posts data as static props
 */
export async function getStaticProps({ preview = false }) {
  const allPostsData = (await getAllPosts(preview)) ?? [];
  return {
    props: { preview, allPostsData },
  };
}

/**
 * The landing page of the blog.
 * @return {JSX.Element} The JSX Code for the Home Page
 */
export default function Home({ allPostsData }: any) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="utilStyles.headingMd">
        <p className="description">
          Humans are meant to write more than just code
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Posts</h2>
        <ul className={utilStyles.list}>
          {allPostsData?.map(({ sys, title, date }: any) => (
            <li className={utilStyles.listItem} key={sys.id}>
              <Link href={`/posts/${sys.id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
