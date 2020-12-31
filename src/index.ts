// import { OpenAPIV3 } from 'openapi-types';
import { OpenAPIObject, PathsObject, PathItemObject, OperationObject } from 'openapi3-ts';

export interface OpenAPIObjectAWS extends OpenAPIObject {
  readonly paths: PathsObject;
}

export interface PathsObjectAWS extends PathsObject {
  [pattern: string]: PathItemObjectAWS;
}

export interface PathItemObjectAWS extends PathItemObject {
  readonly get?: OperationObjectAWS;
  readonly put?: OperationObjectAWS;
  readonly post?: OperationObjectAWS;
  readonly delete?: OperationObjectAWS;
  readonly options?: OperationObjectAWS;
  readonly head?: OperationObjectAWS;
  readonly patch?: OperationObjectAWS;
  readonly trace?: OperationObjectAWS;
}

export interface OperationObjectAWS extends OperationObject {
  'x-amazon-apigateway-integration': XAmazonApiGatewayIntegrationObject;
}

export interface XAmazonApiGatewayIntegrationObject {
  readonly uri: string;
  readonly passthroughBehavior: PassthroughBehavior | string;
  readonly httpMethod: HttpMethods | string;
  readonly type: Type | string;
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