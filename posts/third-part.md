---
title: "🪴 An impasse"
date: "2022-01-03"
---

When trying to follow some not so outdated guides to Gitlab/GCP, I've
noticed that the Kubernetes creation process through cluster is
deprecated, and that the current process to do this is to deploy a
GitLab Agent. Many steps are yet not clear to me and the process seems
very complex at the current stage of my knowledge. Since I'm doing this
as a side-project during my vacations, I'm trying to balance my AFK
time: I don't want to spend hours reading through docs to create a
GitLab CI/CD & GCP pipeline, so instead I will now put in place a simple
integration with Vercel to deploy the first version of my digital
garden, with the intention to come back later to my original idea. I
must remind myself that this the ultimate objective is to create a
self-deployable digital garden, and that I'm using this as an excuse to
learn more about devOps and my currently company stack. certificates

For this new deploy, I also included TypeScript support and
configuration, Eslint, Prettier and Husky to enforce and check my code
style before commiting the code. For this project I'm following Google
Style guidelines so I've grabbed their tsconfig file template for this.

Update:

- The UI and blog functioning has been improved to generate dynamic routes for every post written in md format.
- A new idea is to connect my blog with a Headless CMS (Contentful)

## 📚 Useful resources:

- [GitLab Kubernetes Agent Setup Walkthrough - Round 2](https://www.youtube.com/watch?v=XuBpKtsgGkE)
- [Install the GitLab Agent ALL TIERS](https://docs.gitlab.com/ee/user/clusters/agent/install/)
- [GitOps with GitLab: Connect with a Kubernetes cluster](https://about.gitlab.com/blog/2021/11/18/gitops-with-gitlab-connecting-the-cluster/)
- [How To Style Your Next.JS Projects EXACTLY Like Google (in TypeScript)](https://blog.jarrodwatts.com/nextjs-eslint-prettier-husky)

## 👞 Next Steps:

- Set up pipeline steps for linting and testing
- ~Continue working in my digital garden setup and UI~
- Connect Blog with Headless CMS
- Investigate about how to set up a Gitlab Agent in GKE and prepare a deployment pipeline
