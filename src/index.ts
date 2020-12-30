import { OpenAPIV3 } from 'openapi-types';

// declare namespace OpenApiTypesAwsExtensions {
export interface Document extends OpenAPIV3.Document {
  paths: PathsObject;
}

interface PathsObject extends OpenAPIV3.PathsObject {
  [pattern: string]: PathItemObject;
}

interface PathItemObject extends OpenAPIV3.PathItemObject {
  get?: OperationObject;
  put?: OperationObject;
  post?: OperationObject;
  delete?: OperationObject;
  options?: OperationObject;
  head?: OperationObject;
  patch?: OperationObject;
  trace?: OperationObject;
}

interface OperationObject extends OpenAPIV3.OperationObject {
  'x-amazon-apigateway-integration': XAmazonApiGatewayIntegrationObject;
}


interface XAmazonApiGatewayIntegrationObject {
  uri: string;
  passthroughBehavior: PassthroughBehavior | string;
  httpMethod: HttpMethods | string;
  type: Type | string;
}

export enum HttpMethods {
  POST = 'POST',
  GET = 'GET',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export enum PassthroughBehavior {
  WHEN_NO_MATCH = 'when_no_match',
}

export enum Type {
  AWS_PROXY = 'aws_proxy',
}
// }
// export = OpenApiTypesAwsExtensions;