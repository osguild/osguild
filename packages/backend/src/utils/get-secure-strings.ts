import { SSMClient, GetParameterCommand } from "@aws-sdk/client-ssm";

export const sensitiveKeys: string[] = [];

export async function getSecureString(
	parameterName: string,
): Promise<string | undefined> {
	const ssmClient = new SSMClient({ region: "us-east-1" });

	const getParamCommand = new GetParameterCommand({
		Name: parameterName,
		WithDecryption: true,
	});

	try {
		const ssmResponse = await ssmClient.send(getParamCommand);
		const secureString = ssmResponse.Parameter?.Value;
		return secureString;
	} catch (e) {
		console.log(`could not retrieve value ${parameterName}`, e);

		return;
	}
}
