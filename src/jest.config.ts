const { pathsToModuleNameMapper } = require('ts-jest');
const { defaults: jestNgPreset } = require('jest-preset-angular/presets');

const { compilerOptions } = require(`${__dirname}/tsconfig.spec.json`);

module.exports = {
  preset: 'jest-preset-angular',

  globals: {
    'ts-jest': {
      ...jestNgPreset.globals['ts-jest'],
      tsconfig: `${__dirname}/tsconfig.spec.json`
    },
  },

  roots: ['<rootDir>/src/'],
  testMatch: ['**/+(*.)+(spec).+(ts)'],
//   setupFilesAfterEnv: ['<rootDir>/src/test.ts'],
  collectCoverage: true,
  coverageReporters: ['html'],
  coverageDirectory: 'coverage/my-app',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, {
    prefix: '<rootDir>/'
  })
};
