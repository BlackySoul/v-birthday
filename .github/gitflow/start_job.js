const core = require("@actions/core");
const github = require("@actions/github");

async function run() {
  const token = process.env.GITHUB_TOKEN;
  const gh = github.getOctokit(token);

  const { owner, repo } = github.context.repo;

  await gh.request(
    "POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches",
    {
      owner,
      repo,
      workflow_id: 59748255,
      ref: "main",
      inputs: {
        type: "patch",
      },
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );
}

void run();
