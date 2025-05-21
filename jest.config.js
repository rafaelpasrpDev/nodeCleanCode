module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/main/**',
    '!<rootDir>/src/presentation/protocols/index.ts',
    '!<rootDir>/src/presentation/controller/signup/signup-protocols.ts',
    '!<rootDir>/src/data/usecases/add-account/db-add-account-protocols.ts',
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  preset: '@shelf/jest-mongodb',
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
}
