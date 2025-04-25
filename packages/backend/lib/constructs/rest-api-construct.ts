import path from "node:path";
import { Cors, LambdaIntegration, RestApi } from "aws-cdk-lib/aws-apigateway";
import { Code, Runtime } from "aws-cdk-lib/aws-lambda";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { Construct } from "constructs";
import { StringParameter } from "aws-cdk-lib/aws-ssm";

export class RestApiConstruct extends Construct {
	constructor(scope: Construct, id: string) {
		super(scope, id);

		const githubClientId = StringParameter.fromSecureStringParameterAttributes(
			this,
			"githubClientId",
			{
				parameterName: "/osguild/githubClientId",
			},
		);

		const githubSecretId = StringParameter.fromSecureStringParameterAttributes(
			this,
			"githubSecretId",
			{
				parameterName: "/osguild/githubSecretId",
			},
		);

		const githubCallbackFunction = new NodejsFunction(this, "callback", {
			code: Code.fromAsset(path.join(__dirname, "../../src")),
			handler: "index.handler",
			memorySize: 1024,
			runtime: Runtime.NODEJS_22_X,
			environment: {
				GITHUB_CLIENT: githubClientId.stringValue,
				GITHUB_SECRET: githubSecretId.stringValue,
			},
		});

		githubClientId.grantRead(githubCallbackFunction);
		githubSecretId.grantRead(githubCallbackFunction);

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

		const githubResource = api.root.addResource("github");
		const githubCallbackResource = githubResource.addResource("callback");

		githubCallbackResource.addMethod(
			"POST",
			new LambdaIntegration(githubCallbackFunction),
		);
	}
}
