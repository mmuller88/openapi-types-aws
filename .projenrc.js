const { JsiiProject } = require('projen');

const deps = [
  'openapi-types',
];

const project = new JsiiProject({
  authorAddress: 'damadden88@googlemail.com',
  authorName: 'Martin Mueller',
  name: 'openapi-types-aws',
  repositoryUrl: 'https://github.com/mmuller88/openapi-types-aws',
  deps: deps,
  devDeps: deps,
  python: {
    distName: 'openapi-types-aws',
    module: 'open_types_aws',
  },
  keywords: [
    'oas',
    'openapi',
    'aws',
    'extension',
    'type',
  ],
});

project.synth();
