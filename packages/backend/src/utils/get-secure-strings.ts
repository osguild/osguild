export async function getSecureStrings(
	ssmPrefix: string,
	secureStrings: readonly string[],
	paramToEnvMap: Map<string, string>,
	resourceName: string,
) {
	const ssmClient = new SSMClient({ region: process.env.CDK_DEFAULT_REGION });

	const secureStringsMap: Record<string, string> = {};

	await Promise.all(
		secureStrings.map(async (paramName: string) => {
			const getParamCommand = new GetParameterCommand({
				Name: `${ssmPrefix}${paramName}`,
				WithDecryption: true,
			});

			const ssmResponse = await ssmClient.send(getParamCommand);
			const secureString = ssmResponse.Parameter?.Value;

			if (!secureString) {
				console.error(
					`ERROR! Could not retrieve string for the following param: ${paramName}`,
				);
				return;
			}

			/**
			 * Hijacks the getSecureString to populate the
			 * sensitive key array, used in the filterSensitiveValue
			 */
			sensitiveKeys.push(secureString);

			const envName = paramToEnvMap.get(paramName);

			if (!envName) {
				console.error(
					`ERROR! The param '${paramName}' does not have a mapping to an environment variable name. Please define this in the ${resourceName} map.`,
				);
				return;
			}

			secureStringsMap[envName] = secureString;
		}),
	);

	return secureStringsMap;
}
