module.exports = {
  // All our tests and mocks are in the src dir
  // This prevents jest from finding manual mocks in the submodules
  // If there is a need for other dirs to be searched (e.g. a __mocks__
  // dir adjacent to node_modules for manually mocking modules) then
  // add it explicitly here.
  roots: [
    '<rootDir>/src',
  ],
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'json',
  ],
  transform: {
    '^.+\\.(tsx?)$': [
      'ts-jest', {
        tsconfig: 'tsconfig.json'
      },
    ],
  },
  collectCoverageFrom: [
    '!node_modules/',
    'src/**/*.{js,ts}',
    '!src/**/typedefs/**/*.ts',
  ],
  coverageReporters: [
    'text',
    'json',
    'json-summary',
    'html',
  ],
  coverageThreshold: {},
  reporters: [
    'default',
    'jest-junit'
  ],
  testEnvironment: 'node',
  resetMocks: true,
  restoreMocks: true,
}
