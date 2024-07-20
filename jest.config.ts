module.exports = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Adjust the path if necessary
    testEnvironment: 'jsdom', // Simulate a browser environment for testing
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/$1', // Map imports starting with "@" to "src"
      '\\.css$': 'identity-obj-proxy',
    },
    testMatch: ['**/*.test.(ts|tsx)', '**/*.spec.(ts|tsx)'], // Match test files
    transform: {
        '^.+\\.(css|js|jsx|ts|tsx)$': 'babel-jest', // Transform TypeScript and JavaScript files with Babel
      },
      transformIgnorePatterns: [
        '/node_modules/',
        '\\.(css|scss)$',
         // Adjust the path as per your project structure
      ],
  
  };
