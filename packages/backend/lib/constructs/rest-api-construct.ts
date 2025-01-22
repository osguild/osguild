import { RestApi } from "aws-cdk-lib/aws-apigateway";
import { Construct } from "constructs";

export class RestApiConstruct extends Construct {
	constructor(scope: Construct, id: string) {
		super(scope, id);
		const api = new RestApi(this, "osguild-api", {});

		const apiResource = api.root.addResource("api");
	}
}
