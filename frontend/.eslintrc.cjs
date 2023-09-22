module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    // Code Quality Guidelines
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "react/prop-types": [0], // Disabling prop-types rule for now

    // Add more code quality and security rules as needed

     'no-console': 'error', // Prevent the use of console.log, consider using proper logging

    // Styling Guidelines
    // You can add Prettier configuration here for automatic code formatting

     'prettier/prettier': 'error',

    // Accessibility Guidelines
    // Ensure your code follows accessibility best practices

    'jsx-a11y/alt-text': 'error', // Require alt text for images

    // Security Guidelines
    // Enforce security best practices
    // Example:
    // 'security/detect-non-literal-regexp': 'error', // Detect potentially unsafe regex patterns

    // Additional Guidelines
    // Add any other project-specific rules or configurations here
  },
}
