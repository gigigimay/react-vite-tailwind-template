/** @type {import('jest').Config} */
export default {
  preset: 'ts-jest',

  /**
   * [workaround] for TextEncoder not implemented in 'jest-environment-jsdom',
   * https://github.com/jsdom/jsdom/issues/2524
   */
  testEnvironment: 'jest-fixed-jsdom',
  roots: ['<rootDir>/src'],
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json', 'jsx', 'node'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transformIgnorePatterns: ['/node_modules/(rc-.+?|@babel/runtime).+(js|jsx)$'],
  collectCoverageFrom: [
    'src/components/**/*.{js,jsx,ts,tsx}',
    'src/hooks/**/*.{js,jsx,ts,tsx}',
    'src/pages/**/*.{js,jsx,ts,tsx}',
    'src/reducers/**/*.{js,jsx,ts,tsx}',
    'src/types/**/*.{js,jsx,ts,tsx}',
    'src/utils/**/*.{js,jsx,ts,tsx}',
  ],
  resetMocks: true,
  clearMocks: false,
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: 'tsconfig.app.json' }],
  },
}
