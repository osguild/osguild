import path from "node:path";
import { LambdaIntegration, RestApi } from "aws-cdk-lib/aws-apigateway";
import { Code } from "aws-cdk-lib/aws-lambda";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { Construct } from "constructs";

export class RestApiConstruct extends Construct {
	constructor(scope: Construct, id: string) {
		super(scope, id);

		const githubCallbackFunction = new NodejsFunction(this, "callback", {
			code: Code.fromAsset(path.join(__dirname, "../../src")),
			handler: "index.handler",
		});

		const api = new RestApi(this, "Api", {
			restApiName: "OsGuildApi",
		});

		const githubResource = api.root.addResource("github");
		const githubCallbackResource = githubResource.addResource("callback");

		githubCallbackResource.addMethod(
			"GET",
			new LambdaIntegration(githubCallbackFunction),
		);
	}
}
