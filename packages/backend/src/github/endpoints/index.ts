import type {
	APIGatewayProxyEvent,
	APIGatewayProxyResult,
	Context,
} from "aws-lambda";

export async function handler(
	event: APIGatewayProxyEvent,
	_context: Context,
): Promise<APIGatewayProxyResult> {
	return {
		statusCode: 200,
		body: "hello github",
	};
}
