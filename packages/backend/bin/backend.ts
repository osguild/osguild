#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { BackendStack } from "../lib/backend-stack";
import { getSecureString } from "../src/utils/get-secure-strings";

const app = new cdk.App();

async function main() {
	// const githubSecret = await getSecureString("/osguild/githubSecretId");
	// const githubClientId = await getSecureString("/osguild/githubClientId");

	// if (!githubClientId || !githubSecret) {
	// 	throw new Error("Error! githubClient or githubSecret is not defined");
	// }

	new BackendStack(app, "BackendStack", {
		githubSecret: "",
		githubClientId: "",
	});
}

main();
