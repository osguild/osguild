import { getOctokitClient } from "../utils/github-api";
import type { RestEndpointMethodTypes } from "@octokit/rest";

export async function getPullRequests(): Promise<
	RestEndpointMethodTypes["pulls"]["list"]["response"]
> {
	const client = getOctokitClient();

	const pullRequests = await client.pulls.list({
		owner: "biomejs",
		repo: "biome",
	});

	return pullRequests;
}
