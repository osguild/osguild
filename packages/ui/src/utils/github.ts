import { Octokit } from "octokit";
import { ACCESS_TOKEN } from "./constants";
import { isSuccessfulResponse } from "../hooks/useAuthenticateUser";

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

export async function getIssues() {}
