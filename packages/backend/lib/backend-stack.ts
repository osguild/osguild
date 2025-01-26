import * as cdk from "aws-cdk-lib";

import type { Construct } from "constructs";
import { RestApiConstruct } from "./constructs/rest-api-construct";

export class BackendStack extends cdk.Stack {
	constructor(scope: Construct, id: string, props?: cdk.StackProps) {
		super(scope, id, props);

		new RestApiConstruct(this, "rest-api");
	}
}
