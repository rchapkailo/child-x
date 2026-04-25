export const REPO_NAME = "child-x";

export function getRepoName(): string {
	return REPO_NAME;
}

console.log(`Repo: ${getRepoName()}`);