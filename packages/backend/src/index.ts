import type {
	APIGatewayProxyEvent,
	APIGatewayProxyResult,
	Context,
} from "aws-lambda";

interface ClientAuthRequest {
	code: string;
}

/**
 * Core authentication handler. This function is called by the frontend after a user is authenticated by GitHub.
 * TODO: For local development, we'll want the ability to allow developers to provide their own GitHub personal access token.
 * This eliminates the concern around using the GitHub App's secret to authenticate. What this means is that we'll want to
 * have some sort of check when a user hits this endpoint, and see if it's a local development environment request. If so,
 * return the PAT that the user defines in the .env.
 * @param event
 * @param _context
 * @returns
 */
export async function handler(
	event: APIGatewayProxyEvent,
	_context: Context,
): Promise<APIGatewayProxyResult> {
	console.log("request received", event);
	if (!event.body)
		return {
			statusCode: 400,
			body: "No body sent",
		};

	try {
		const { code } = JSON.parse(event.body) as ClientAuthRequest;

		// fetch API token
		const response = await fetch(
			"https://github.com/login/oauth/access_token",
			{
				method: "POST",
				headers: {
					Accept: "application/json",
					"content-type": "application/json",
				},
				body: JSON.stringify({
					code,
					client_id: process.env.GITHUB_CLIENT,
					client_secret: process.env.GITHUB_SECRET,
				}),
			},
		);

		const body = await response.text();

		return {
			statusCode: 200,
			body,
		};
	} catch (e) {
		console.log(e);
		return {
			statusCode: 500,
			body: "internal server error",
		};
	}
}
