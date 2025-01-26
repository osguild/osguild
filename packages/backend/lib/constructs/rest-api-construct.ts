import path from "node:path";
import { RestApi } from "aws-cdk-lib/aws-apigateway";
import { Code } from "aws-cdk-lib/aws-lambda";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { Construct } from "constructs";

export class RestApiConstruct extends Construct {
	constructor(scope: Construct, id: string) {
		super(scope, id);

		new NodejsFunction(this, "callback", {
			code: Code.fromAsset(path.join(__dirname, "../src")),
			handler: "index.handler",
		});
		const api = new RestApi(this, "osguild-api", {});

		const apiResource = api.root.addResource("api");
	}
}
