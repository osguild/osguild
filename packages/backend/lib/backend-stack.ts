import * as cdk from "aws-cdk-lib";

import type { Construct } from "constructs";
import { RestApiConstruct } from "./constructs/rest-api-construct";

export class Parent {
	constructor(test: string) {
		console.log(`Parent ${test}`);
	}
}

export class Child extends Parent {
	constructor(tfgdgdfest: string, blah: string) {
		super(tfgdgdfest);
		console.log(`Child ${tfgdgdfest}`);
		console.log(blah);
	}
}

export class BackendStack extends cdk.Stack {
	constructor(scope: Construct, id: string, props?: cdk.StackProps) {
		super(scope, id, props);

		new RestApiConstruct(this, "restApi");

		// database construct here at some point
	}
}
