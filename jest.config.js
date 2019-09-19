module.exports = {
  'moduleFileExtensions': [
    'js',
    'json',
  ],
  'testRegex': '^.*.test.js$',
  'transform': {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.svelte$': 'jest-transform-svelte',
  },
  'collectCoverageFrom': [
    'src/**/*js',
    '!**/node_modules/**',
    '!**/coverage/**',
    '!src/index.tsx',
    '!**/**tests.js',
  ],
  'setupFiles': [
    '<rootDir>/testSetup.js',
  ],
  'moduleNameMapper': {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$': '<rootDir>/empty.js',
    '\\.(css|less)$': '<rootDir>/empty.js',
    '\\.md$': '<rootDir>/empty-md.js',
  },
  'testURL': 'https://localhost/',
  'coverageThreshold': {
    'global': {
      'branches': 80,
      'functions': 80,
      'lines': 80,
    },
  },
};
