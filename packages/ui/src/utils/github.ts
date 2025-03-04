import { Octokit } from "octokit";
import { isSuccessfulResponse } from "../hooks/useAuthenticateUser";
import { ACCESS_TOKEN } from "./constants";

let octokit: Octokit;

export function getOctokitClient(): Octokit {
	if (octokit) return octokit;

	const credentials = sessionStorage.getItem(ACCESS_TOKEN);

	if (!isSuccessfulResponse(credentials))
		throw new Error(`User not logged in${credentials}`);

	const { access_token } = credentials;
	octokit = new Octokit({ auth: access_token });

	return octokit;
}

export async function getUserRepos() {
	const octokitClient = getOctokitClient();

	octokitClient.request("GET /users/{username}/repos", {
		username: "branberry",
		headers: {
			"X-GitHub-Api-Version": "2022-11-28",
		},
	});
}

export async function searchForIssues(platform = "macOS",language = "python") {
	const octokitClient = getOctokitClient();
	// Documentation on how to search issues https://docs.github.com/en/rest/search/search?apiVersion=2022-11-28#search-issues-and-pull-requests

	const query = `${platform}+label:good-first-issue+language:${language}+state:open`;

	const response = await octokitClient.request('GET /search/issues', {
		q: query, 
		sort: "updated",
		headers: {
			'X-GitHub-Api-Version': '2022-11-28'
		}
	})

	console.log(response.data)
}