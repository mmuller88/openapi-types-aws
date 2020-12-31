/* eslint-disable quote-props */
import * as openapi from '../src/index';
test('create', () => {
  const api: openapi.OpenAPIObjectAWS = {
    openapi: '3.0.2',
    info: {
      title: 'Swagger Petstore - OpenAPI 3.0',
      description:
        "This is a sample Pet Store Server based on the OpenAPI 3.0 specification.  You can find out more about\nSwagger at [http://swagger.io](http://swagger.io). In the third iteration of the pet store, we've switched to the design first approach!\nYou can now help us improve the API whether it's by making changes to the definition itself or to the code.\nThat way, with time, we can improve the API in general, and expose some of the new features in OAS3.\n\nSome useful links:\n- [The Pet Store repository](https://github.com/swagger-api/swagger-petstore)\n- [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml)",
      termsOfService: 'http://swagger.io/terms/',
      contact: { email: 'apiteam@swagger.io' },
      license: {
        name: 'Apache 2.0',
        url: 'http://www.apache.org/licenses/LICENSE-2.0.html',
      },
      version: '1.0.5',
    },
    externalDocs: {
      description: 'Find out more about Swagger',
      url: 'http://swagger.io',
    },
    servers: [
      { url: 'https://8jcspmriad.execute-api.eu-central-1.amazonaws.com/prod' },
    ],
    tags: [
      {
        name: 'pet',
        description: 'Everything about your Pets',
        externalDocs: {
          description: 'Find out more',
          url: 'http://swagger.io',
        },
      },
      { name: 'store', description: 'Operations about user' },
      {
        name: 'user',
        description: 'Access to Petstore orders',
        externalDocs: {
          description: 'Find out more about our store',
          url: 'http://swagger.io',
        },
      },
    ],
    paths: {
      '/pet': {
        put: {
          tags: ['pet'],
          summary: 'Update an existing pet',
          description: 'Update an existing pet by Id',
          operationId: 'updatePet',
          requestBody: {
            description: 'Update an existent pet in the store',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Pet' },
              },
              'application/xml': {
                schema: { $ref: '#/components/schemas/Pet' },
              },
              'application/x-www-form-urlencoded': {
                schema: { $ref: '#/components/schemas/Pet' },
              },
            },
            required: true,
          },
          responses: {
            200: {
              description: 'Successful operation',
              content: {
                'application/xml': {
                  schema: { $ref: '#/components/schemas/Pet' },
                },
                'application/json': {
                  schema: { $ref: '#/components/schemas/Pet' },
                },
              },
            },
            400: { description: 'Invalid ID supplied' },
            404: { description: 'Pet not found' },
            405: { description: 'Validation exception' },
          },
          'x-amazon-apigateway-integration': {
            uri:
              'arn:aws:apigateway:eu-central-1:lambda:path/2015-03-31/functions/arn:aws:lambda:eu-central-1:981237193288:function:getOneConfApi/invocations',
            passthroughBehavior: openapi.PassthroughBehavior.WHEN_NO_MATCH,
            httpMethod: openapi.HttpMethods.POST,
            type: openapi.Type.AWS_PROXY,
          },
          security: [{ petstore_auth: ['write:pets', 'read:pets'] }],
        },
      },
    },
  };
  api;
});