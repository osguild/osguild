import { RestApi } from "aws-cdk-lib/aws-apigateway";
import { Construct } from "constructs";

export class RestApiConstruct extends Construct {
	constructor(scope: Construct, id: string) {
		super(scope, id);
		new RestApi(this, "API");
	}
}
