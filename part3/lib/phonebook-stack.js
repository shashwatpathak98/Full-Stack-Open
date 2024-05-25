const { Stack, Duration } = require("aws-cdk-lib");
const { RestApi, LambdaIntegration } = require("aws-cdk-lib/aws-apigateway");
const { NodejsFunction } = require("aws-cdk-lib/aws-lambda-nodejs");
// const sqs = require('aws-cdk-lib/aws-sqs');

class PhoneBookStack extends Stack {
  /**
   *
   * @param {Construct} scope
   * @param {string} id
   * @param {StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    const lambda = new NodejsFunction(this, "PhoneBookHandlerFn", {
      entry: "src/backend/handlers/phoneBookFunc.js",
      handler: "phoneBookHandler",
    });

    const api = new RestApi(this, "PhoneBookApi", {
      defaultIntegration: new LambdaIntegration(lambda),
      defaultCorsPreflightOptions: {
        allowOrigins: ["*"],
        allowMethods: ["*"],
        allowHeaders: ["*"],
      },
    });

    const routes = api.root.addResource("phonebook");
    routes.addMethod("GET");
    routes.addMethod("POST");
    const updateRoute = routes.addResource("{id}");
    updateRoute.addMethod("PUT");
  }
}

module.exports = { PhoneBookStack };
