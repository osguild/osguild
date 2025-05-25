import * as cdk from "aws-cdk-lib";

import type { Construct } from "constructs";
import { RestApiConstruct } from "./constructs/rest-api-construct";

<<<<<<< HEAD
interface BackendStackOptions extends cdk.StackProps {
	githubSecret: string;
	githubClientId: string;
}

=======
>>>>>>> main
export class BackendStack extends cdk.Stack {
	constructor(
		scope: Construct,
		id: string,
		{ githubClientId, githubSecret, ...props }: BackendStackOptions,
	) {
		super(scope, id, props);

		new RestApiConstruct(this, "restApi", { githubClientId, githubSecret });

		// database construct here at some point
	}
}
