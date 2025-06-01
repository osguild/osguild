import boto3
import json
import os
from osg_utils import engine as osg_engine
import pandas as pd
from io import BytesIO

def lambda_handler(event, context):
    gh_api_key = os.getenv('gh_api_key')
    s3_bucket_location = os.getenv('s3_bucket_location')
    meta_engine = osg_engine(gh_api_key)
    base_url = "https://api.github.com/"
    owner = event.get('owner', 'duckdb')
    repo = event.get('repo', 'duckdb')
    scope = event.get('scope', ['contributors','comments','commits','branches','issues'])
    mid_url = 'repos' + '/' + owner + '/' + repo + '/'  

    for x in scope:
        target_url = base_url + mid_url + x
        print(target_url)
        json_data = meta_engine.request(target_url)
        df = pd.read_json(json_data)

    output_key = 'data.csv'#todo: make dynamic
    # Initialize S3 client (uses Lambda IAM role)
    s3_client = boto3.client('s3')
    # Write DataFrame to BytesIO
    buffer = BytesIO()
    df.to_csv(buffer, index=False)
    buffer.seek(0)  # Reset buffer position
    
    # Upload to S3
    s3_client.put_object(
        Bucket=s3_bucket_location,
        Key=output_key,
        Body=buffer.getvalue()
    )

    return {
        'statusCode': 200,
        'body': json.dumps('Hello from Lambda!')
    }
