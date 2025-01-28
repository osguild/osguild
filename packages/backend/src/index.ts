import type {
	APIGatewayProxyEvent,
	APIGatewayProxyResult,
	Context,
} from "aws-lambda";

interface ClientAuthRequest {
	code: string;
}

// core lambda code
export async function handler(
	event: APIGatewayProxyEvent,
	_context: Context,
): Promise<APIGatewayProxyResult> {
	if (!event.body)
		return {
			statusCode: 400,
			body: "No body sent",
		};
	const { code } = JSON.parse(event.body) as ClientAuthRequest;

	// fetch API token
	const response = await fetch("https://github.com/login/oauth/access_token", {
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
	});

	const body = await response.text();

	return {
		statusCode: 200,
		body,
	};
}
