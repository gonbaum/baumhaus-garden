---
title: "🪴 First Steps"
date: "2022-01-02"
---

After succesfully created my Gitlab project, I've proceeded to
containerize my app and setting up a Kubernetes cluster in GCP via
Gitlab CI/CD integration.

For containerize the app, I realised that we can use the example
Dockerfile from the official Next.js documentation. Once created the
file I've created the image and run a container locally to test it, by
exposing the port 3000. Commands used: docker build . -t
nextjs-baumhaus-garden docker run -p 3000:3000 nextjs-baumhaus-garden

## 📚 Useful resources:

- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Using Docker with Next.js (and Deploying with Google Cloud Run)](https://www.youtube.com/watch?v=Pd2tVxhFnO4)
- [Create a Kubernetes cluster on GCP](https://faun.pub/application-deployment-using-gitlab-ci-cd-on-managed-kubernetes-cluster-at-gcp-72b59496979c)

## 👞 Next Steps:
