import Link from "next/link";

export default function FirstSteps() {
  return (
    <>
      <h1>🍏 An impasse </h1>
      <p>
        When trying to follow some not so outdated guides to Gitlab/GCP, I've
        noticed that the Kubernetes creation process through cluster is
        deprecated, and that the current process to do this is to deploy a
        GitLab Agent. Many steps are yet not clear to me and the process seems
        very complex for this is stage of my knowledge. Since I'm doing this as
        a side-project during my vacations, I'm trying to balance my screen time
        balance. For that reason, I don't want to spend hours reading through
        docs to create a GitLab CI/CD => GCP pipeline, so instead I will now put
        in place a simple integration with Vercel to deploy the first version of
        my digital garden, with the intention to come back later to my original
        idea. I must remind myself that this the ultimate objective is to create
        a self-deployable digital garden, and that I'm using this as an excuse
        to learn more about devOps and my currently company stack. certificates
      </p>

      <h3>📚 Useful resources: </h3>
      <ul>
        <li>
          <a href="https://www.youtube.com/watch?v=XuBpKtsgGkE">
            GitLab Kubernetes Agent Setup Walkthrough - Round 2
          </a>
        </li>
        <li>
          <a href="https://docs.gitlab.com/ee/user/clusters/agent/install/">
            Install the GitLab Agent ALL TIERS
          </a>
        </li>
        <li>
          <a href="https://about.gitlab.com/blog/2021/11/18/gitops-with-gitlab-connecting-the-cluster/">
            GitOps with GitLab: Connect with a Kubernetes cluster
          </a>
        </li>
      </ul>
      <h3>👞 Next steps:</h3>
      <ul>
        <li>Set up pipeline steps for linting and testing</li>
        <li>Continue working in my digital garden UI</li>
        <li>Investigate about how to set up a Gitlab Agent in GKE and prepare a deployment pipeline</li>
      </ul>
      <h2>
        <Link href="/posts/first-steps">
          <a>First steps</a>
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
