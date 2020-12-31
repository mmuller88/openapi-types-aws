const { TypeScriptProject } = require('projen');

const deps = [
  'openapi3-ts',
];

const project = new TypeScriptProject({
  authorAddress: 'damadden88@googlemail.com',
  authorName: 'Martin Mueller',
  name: 'openapi-types-aws',
  repositoryUrl: 'https://github.com/mmuller88/openapi-types-aws',
  deps: deps,
  // devDeps: deps,
  // bundledDeps: deps,
  releaseToNpm: true,
  // python: {
  //   distName: 'openapi-types-aws',
  //   module: 'open_types_aws',
  // },
  keywords: [
    'oas',
    'openapi',
    'aws',
    'extension',
    'type',
  ],
});

project.synth();
