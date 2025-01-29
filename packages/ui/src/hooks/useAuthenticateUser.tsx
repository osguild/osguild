import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router";
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

function isSuccessfulResponse(obj: unknown): obj is OauthSuccessResponse {
	const { access_token, expires_in, refresh_token, refresh_token_expires_in } =
		obj as OauthSuccessResponse;
	return (
		typeof access_token === "string" &&
		typeof expires_in === "number" &&
		typeof refresh_token === "string" &&
		typeof refresh_token_expires_in === "number"
	);
}

function isErrorResponse(obj: unknown): obj is OauthErrorResponse {
	const { error, error_description, error_uri } = obj as OauthErrorResponse;
	return (
		typeof error === "string" &&
		typeof error_description === "string" &&
		typeof error_uri === "string"
	);
}

export function useAuthenticateUser() {
	const urlParams = new URLSearchParams(window.location.search);
	const code = urlParams.get("code");

	const navigate = useNavigate();

	const fetchTokens = useCallback(async () => {
		// Send code to backend
		const response = await fetch("/api/github/callback", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ code }),
		});

		const data = await response.json();

		if (isErrorResponse(data)) {
			console.log("the token could not be read");
			return;
		}
		navigate("/");
	}, [code, navigate]);

	useEffect(() => {
		if (!code) return;

		console.log(code);
		fetchTokens();
	}, [fetchTokens, code]);
}
