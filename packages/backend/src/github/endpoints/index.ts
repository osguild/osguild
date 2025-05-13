import type {
	APIGatewayProxyEvent,
	APIGatewayProxyResult,
	Context,
} from "aws-lambda";
import { getPullRequestRatio } from "../services";

export async function handler(
	_event: APIGatewayProxyEvent,
	_context: Context,
): Promise<APIGatewayProxyResult> {
	await getPullRequestRatio();
	return {
		statusCode: 200,
		body: "hello github",
	};
}
