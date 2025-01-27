import type {
	APIGatewayProxyEvent,
	APIGatewayProxyResult,
	Context,
} from "aws-lambda";

// core lambda code
export async function handler(
	event: APIGatewayProxyEvent,
	_context: Context,
): Promise<APIGatewayProxyResult> {
	// fetch API token
	const response = await fetch("https://github.com/login/oauth/access_token", {
		method: "POST",
		headers: {
			Accept: "application/json",
			"content-type": "application/json",
		},
		body: JSON.stringify({
			code: event.queryStringParameters?.code || "",
			client_id: process.env.GITHUB_CLIENT,
			client_secret: process.env.GITHUB_SECRET,
		}),
	});

	const body = await response.json();
	return {
		statusCode: 302,
		headers: {
			Location: "http://localhost:5173",
		},
		body: "Redirecting...",
	};
}
