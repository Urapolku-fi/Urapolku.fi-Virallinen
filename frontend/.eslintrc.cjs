module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:security/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:storybook/recommended"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', 'prettier', 'jsx-a11y', 'security'],
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
    'prettier/prettier': 'off', // Make sure the editor doesn't show errors for linting, since formatting should fix that automatically.

    // Accessibility Guidelines
    // Ensure your code follows accessibility best practices

    // JSX Accessibility Rules
    "jsx-a11y/alt-text": "error", // Enforce alt text on images
    "jsx-a11y/anchor-has-content": "error", // Ensure anchor elements have content
    "jsx-a11y/aria-props": "error", // Enforce ARIA property values are valid
    "jsx-a11y/aria-role": "error", // Enforce ARIA roles are valid
    "jsx-a11y/aria-unsupported-elements": "error", // Enforce ARIA attributes are not used on non-interactive elements
    "jsx-a11y/control-has-associated-label": "error", // Require form elements to have associated labels
    "jsx-a11y/label-has-associated-control": "error", // Require labels to have associated form controls
    "jsx-a11y/no-autofocus": "error", // Disallow auto-focusing elements
    "jsx-a11y/no-distracting-elements": "error", // Disallow distracting elements
    "jsx-a11y/no-interactive-element-to-noninteractive-role": "error", // Ensure interactive elements have appropriate role attributes
    "jsx-a11y/role-has-required-aria-props": "error", // Enforce that elements with ARIA roles have required props
    "jsx-a11y/role-supports-aria-props": "error", // Enforce ARIA state and property values are valid
    "jsx-a11y/heading-has-content": "error", // Ensure heading elements have content

    // Security Guidelines
    // Enforce security best practices

    // Security Rules
    "security/detect-child-process": "warn", // Detect child_process usage
    "security/detect-non-literal-fs-filename": "warn", // Detect non-literal file system API calls
    "security/detect-non-literal-regexp": "warn", // Detect potentially unsafe regular expressions
    "security/detect-non-literal-require": "warn", // Detect non-literal require calls
    "security/detect-object-injection": "warn", // Detect potential object injection vulnerabilities
  },

}
