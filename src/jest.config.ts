module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
        '<rootDir>/src/app/**/*.ts',
        '!<rootDir>/src/*.d.ts',
    ],
    coveragePathIgnorePatterns: [
        '/node_modules/',
        '/src-test/',
        '/dist/'
    ],
    globals: {
        'ts-jest': {
            allowSyntheticDefaultImports: true,
            tsConfig: '<rootDir>/src/tsconfig.spec.json',
            stringifyContentPathRegex: '\\.html$',
            diagnostics: false,
        }
    },
    moduleNameMapper: {
        '^@app/(.*)$': '<rootDir>/src/app/$1'
    },
    modulePathIgnorePatterns: ['<rootDir>/docker'],
    transform: {
        '^.+\\.(j|t)s?$': 'ts-jest',
    }
};
