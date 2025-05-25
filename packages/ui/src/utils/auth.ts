import { ACCESS_TOKEN } from "./constants";

export function getAccessToken(): string | undefined {
	const accessToken = sessionStorage.getItem(ACCESS_TOKEN);

	if (!accessToken) {
		console.warn(
			"Access token is not present. Sending a request to the backend without it. Requests made unauthenticated will be severely rate limited.",
		);

		return;
	}

	return accessToken;
}
