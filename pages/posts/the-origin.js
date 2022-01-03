import Link from "next/link";

export default function TheOrigin() {
  return (
    <>
      <h1>🪴 The origin </h1>
      <p>
        To kickstart this project, I've first created a repo in github and then
        bootstrapped a Next.js app locally by using the command: npx
        create-next-app nextjs-blog --use-npm --example
        "https://github.com/vercel/next-learn/tree/master/basics/learn-starter"
        taken from the offical documentation.
      </p>
      <p>
        Once running, I've created my first post (this one) and then proceeded
        to create a Gitlab project by importing my github repository dedicated
        to the project. I had to create a personal token for this and once this
        was done, I've also created a gitlab-ci.yml file with some 'mock
        pipeline' that tells if the push is made on the main branch or any other
        branch.
      </p>

      <h3>📚 Useful articles: </h3>
      <ul>
        <li>
          <a href="https://nextjs.org/learn/basics/create-nextjs-app">
            Create a Next.js App
          </a>
        </li>
        <li>
          <a href="https://blog.eleven-labs.com/en/introduction-gitlab-ci/">
            Introduction to Gitlab CI/CD
          </a>
        </li>
        <li>
          <a href="https://docs.gitlab.com/ee/ci/ci_cd_for_external_repos/github_integration.html">
            Using GitLab CI/CD with a GitHub repository
          </a>
        </li>
      </ul>
      <Link href="/posts/first-steps"><h3>👞 Next steps:</h3></Link>
      <ul>
        <li>Containerize my Next.js app with Docker</li>
        <li>Deploy and run my Next.js app in Google Cloud Platform</li>
        <li>Automatize deployment process with Gitlab CI/CD</li>
      </ul>
      <h2>
        <Link href="/posts/first-steps">
          <a>Next steps</a>
        </Link>
      </h2>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}
