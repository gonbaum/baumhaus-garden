import Link from "next/link";
import React from "react";
import Head from "next/head";
import Layout from "../../components/layout";

/**
 * Return a post element
 * @return {React.ReactElement}
 */
export default function FirstSteps() {
  return (
    <Layout>
      <Head>
        <title>First Steps</title>
      </Head>
      <h1>🚀 First Steps </h1>
      <p>
        After succesfully created my Gitlab project, I've proceeded to
        containerize my app and setting up a Kubernetes cluster in GCP via
        Gitlab CI/CD integration.
      </p>
      <p>
        For containerize the app, I realised that we can use the example
        Dockerfile from the official Next.js documentation. Once created the
        file I've created the image and run a container locally to test it, by
        exposing the port 3000. Commands used: docker build . -t
        nextjs-baumhaus-garden docker run -p 3000:3000 nextjs-baumhaus-garden
      </p>

      <h3>📚 Useful resources: </h3>
      <ul>
        <li>
          <a href="https://nextjs.org/docs/deployment">Next.js Deployment</a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=Pd2tVxhFnO4">
            Using Docker with Next.js (and Deploying with Google Cloud Run)
          </a>
        </li>
        <li>
          <a href="https://faun.pub/application-deployment-using-gitlab-ci-cd-on-managed-kubernetes-cluster-at-gcp-72b59496979c">
            Create a Kubernetes cluster on GCP
          </a>
        </li>
      </ul>
      <h3>👞 Next steps:</h3>
      <ul>
        <li></li>
      </ul>
      <h2>
        <Link href="/posts/third-part">
          <a>Third part</a>
        </Link>
      </h2>
      <h2>
        <Link href="/posts/the-origin">
          <a>The origin</a>
        </Link>
      </h2>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
