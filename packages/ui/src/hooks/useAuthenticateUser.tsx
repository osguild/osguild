import { useCallback, useEffect } from "react";

interface OauthSuccessResponse {
	access_token: string;
	expires_in: number;
	refresh_token: string;
	refresh_token_expires_in: number;
	token_type: string;
	scope: string;
}

interface OauthErrorResponse {
	error: string;
	error_description: string;
	error_uri: string;
}
export function useAuthenticateUser() {
	const urlParams = new URLSearchParams(window.location.search);
	const code = urlParams.get("code");

	const fetchTokens = useCallback(async () => {
		// Send code to backend
		const response = await fetch("/api/github/callback", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ code }),
		});

		const data = await response.json();

		console.log(data);
	}, [code]);

	useEffect(() => {
		if (!code) return;

		console.log(code);
		fetchTokens();
	}, [fetchTokens, code]);
}
