import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router";
import { ACCESS_TOKEN } from "../utils/constants";

export interface OauthSuccessResponse {
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

export function isSuccessfulResponse(
	obj: unknown,
): obj is OauthSuccessResponse {
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

/**
 * This hook handles when a user clicks on the login through GitHub button.
 * The custom hook looks at the URL and grabs the auth code, if it's present.
 */
export function useAuthenticateUser() {
	const urlParams = new URLSearchParams(window.location.search);
	const code = urlParams.get("code");

	const navigate = useNavigate();

	const fetchTokens = useCallback(async () => {
		// Send code to backend
		try {
			const response = await fetch(
				"https://sp89tu7492.execute-api.us-east-1.amazonaws.com/prod/github/callback",
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ code }),
				},
			);

			const data = await response.json();

			if (isErrorResponse(data)) {
				console.error("the token could not be read", data);

				return;
			}

			if (isSuccessfulResponse(data)) {
				// set tokens here
				sessionStorage.setItem(ACCESS_TOKEN, JSON.stringify(data));
			}
		} catch (e) {
			console.error("an error has occurred", e);
		}

		navigate("/");
	}, [code, navigate]);

	useEffect(() => {
		if (!code) return;

		fetchTokens();
	}, [fetchTokens, code]);
}
