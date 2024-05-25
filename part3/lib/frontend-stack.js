const { Stack , RemovalPolicy } = require("aws-cdk-lib");
const { Bucket, BlockPublicAccess ,BucketPolicy} = require("aws-cdk-lib/aws-s3");
const { BucketDeployment, Source } = require("aws-cdk-lib/aws-s3-deployment");
const path  = require("path")


class FrontendStack extends Stack {
  constructor(scope, id, props) {
    super(scope, id, props);
    const bucket = new Bucket(this, "FrontendBucket", {
      websiteIndexDocument: "index.html",
      publicReadAccess: true,
      removalPolicy: RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
      blockPublicAccess: new BlockPublicAccess({
        blockPublicAcls: false,
        blockPublicPolicy: false,
        ignorePublicAcls: false,
        restrictPublicBuckets: false,
      }),
    });

    new BucketDeployment(this, "DeployWebsite", {
      sources: [Source.asset(path.join(__dirname, "../src/frontend/phonebook/dist"))],
      destinationBucket: bucket,
    });
  }
}

module.exports=  {FrontendStack}