import path from "node:path";
import { LambdaIntegration, RestApi } from "aws-cdk-lib/aws-apigateway";
import { Code, Runtime } from "aws-cdk-lib/aws-lambda";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { Construct } from "constructs";

interface RestApiConstructArgs {
	githubSecret: string;
	githubClientId: string;
}
export class RestApiConstruct extends Construct {
	constructor(
		scope: Construct,
		id: string,
		{ githubClientId, githubSecret }: RestApiConstructArgs,
	) {
		super(scope, id);

		const githubCallbackFunction = new NodejsFunction(this, "callback", {
			code: Code.fromAsset(path.join(__dirname, "../../src")),
			handler: "index.handler",
			memorySize: 1024,
			runtime: Runtime.NODEJS_22_X,
			environment: {
				GITHUB_CLIENT: githubClientId,
				GITHUB_SECRET: githubSecret,
			},
		});

		const api = new RestApi(this, "Api", {
			restApiName: "OsGuildApi",
		});

		api.root.addCorsPreflight({
			allowOrigins: ["*"],
			allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
			allowHeaders: [
				"Content-Type",
				"Authorization",
				"X-Amz-Date",
				"X-Api-Key",
				"X-Amz-Security-Token",
				"X-Amz-User-Agent",
			],
			allowCredentials: true,
		});
		// myapi.com/github
		const githubResource = api.root.addResource("github");
		// myapi.com/github/callback
		const githubCallbackResource = githubResource.addResource("callback");

		// this adds a POST method to myapi.com/github/callback
		githubCallbackResource.addMethod(
			"POST",
			new LambdaIntegration(githubCallbackFunction),
		);
	}
}
