import Head from "next/head";
import Link from "next/link";
import React from "react";
import Layout, { siteTitle } from "../components/layout";

/**
 * The landing page of the blog.
 * @return {JSX.Element} The JSX Code for the Home Page
 */
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="utilStyles.headingMd">
        <h1 className="title">
          Read{" "}
          <Link href="/posts/the-origin">
            <a>the origin!</a>
          </Link>
        </h1>

        <p className="description">
          This is the beginning of my digital garden
        </p>
      </section>
    </Layout>
  );
}
