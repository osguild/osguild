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
	console.log(event);
	return { body: JSON.stringify({ body: "hello" }), statusCode: 200 };
}
