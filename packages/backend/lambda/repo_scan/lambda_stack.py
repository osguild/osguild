from aws_cdk import (
    core as cdk,
    aws_lambda,
    aws_iam
)

class LambdaStack(cdk.Stack):
    def __init__(self, scope: cdk.Construct, construct_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)

        # Define IAM role for Lambda execution
        lambda_role = aws_iam.Role(
            self, "LambdaExecutionRole",
            assumed_by=aws_iam.ServicePrincipal("lambda.amazonaws.com"),
            description="Basic execution role for Lambda function"
        )

        # Add basic Lambda execution policy
        lambda_role.add_managed_policy(
            aws_iam.ManagedPolicy.from_aws_managed_policy_name(
                "service-role/AWSLambdaBasicExecutionRole"
            )
        )

        # Add AWS Pandas layer
        pandas_layer = aws_lambda.LayerVersion.from_layer_version_arn(
            self, "PandasLayer",
            layer_version_arn=f"arn:aws:lambda:{self.region}:336392948345:layer:AWSSDKPandas-Python39:10"
        )

        # Create Lambda function with Pandas layer
        lambda_function = aws_lambda.Function(
            self, "MyLambdaFunction",
            runtime=aws_lambda.Runtime.PYTHON_3_9,
            handler="repo_scan_lambda.lambda_handler",
            code=aws_lambda.Code.from_asset("lambda"),
            role=lambda_role,
            timeout=cdk.Duration.seconds(30),
            memory_size=128,
            description="Lambda function with Pandas layer for repo scanning deployed with CDK",
            layers=[pandas_layer]
        )

        # Output the Lambda function ARN
        cdk.CfnOutput(
            self, "LambdaFunctionArn",
            value=lambda_function.function_arn,
            description="ARN of the Lambda function"
        )