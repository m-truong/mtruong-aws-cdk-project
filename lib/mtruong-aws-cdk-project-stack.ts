import * as cdk from "aws-cdk-lib";
// Note: Always import the AWS construct
import { aws_s3 as s3 } from "aws-cdk-lib";
import * as sqs from "aws-cdk-lib/aws-sqs";
import { Construct } from "constructs";

export class MtruongAwsCdkProjectStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    const queue = new sqs.Queue(this, "MtruongAwsCdkProjectQueue", {
      visibilityTimeout: cdk.Duration.seconds(300),
    });

    // NOTE: Always INSTALL the aws-dependency
    new s3.Bucket(this, "MyFirstBucket", {
      versioned: true,
    });
  }
}
