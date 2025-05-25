import { getAccessToken } from "./auth";

export async function fetcher(url: string) {
	const accessToken = getAccessToken();

	const headers = new Headers();

	if (accessToken) headers.set("Authorization", accessToken);

	const res = await fetch(url, {
		headers,
	});

	return res.json();
}
