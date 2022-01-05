---
title: "🪴 The origin"
date: "2022-01-01"
---

To kickstart this project, I've first created a repo in github and then
bootstrapped a Next.js app locally by using the command: npx
create-next-app nextjs-blog --use-npm --example
"https://github.com/vercel/next-learn/tree/master/basics/learn-starter"
taken from the offical documentation.

Once running, I've created my first post (this one) and then proceeded
to create a Gitlab project by importing my github repository dedicated
to the project. I had to create a personal token for this and once this
was done, I've also created a gitlab-ci.yml file with some 'mock
pipeline' that tells if the push is made on the main branch or any other
branch.

## 📚 Useful resources:

- [Create a Next.js App](https://nextjs.org/learn/basics/create-nextjs-app)
- [Introduction to Gitlab CI/CD](https://blog.eleven-labs.com/en/introduction-gitlab-ci/)
- [Using GitLab CI/CD with a GitHub repository](https://docs.gitlab.com/ee/ci/ci_cd_for_external_repos/github_integration.html)

## 👞 Next Steps:

- Containerize my Next.js app with Docker
- Deploy and run my Next.js app in Google Cloud Platform
- Automatize deployment process with Gitlab CI/CD
