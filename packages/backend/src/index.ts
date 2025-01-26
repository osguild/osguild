import type { APIGatewayProxyEvent, Context } from "aws-lambda";

// core lambda code
export async function handler(event: APIGatewayProxyEvent, context: Context) {
	return { body: "Hello from CDK!" };
}
