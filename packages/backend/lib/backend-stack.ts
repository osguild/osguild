import * as cdk from "aws-cdk-lib";
import { Code } from "aws-cdk-lib/aws-lambda";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import type { Construct } from "constructs";
import path = require("node:path");
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class BackendStack extends cdk.Stack {
	constructor(scope: Construct, id: string, props?: cdk.StackProps) {
		super(scope, id, props);

		new NodejsFunction(this, "callback", {
			code: Code.fromAsset(path.join(__dirname, "../src")),
			handler: "index.handler",
		});
	}
}
