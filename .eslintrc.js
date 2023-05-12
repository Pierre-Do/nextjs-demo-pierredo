const config = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'prettier', 'import'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:@next/next/recommended',
  ],
  env: {
    es6: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: [
    'packages/qoqa_web/entry.d.ts', // Generated file
  ],
  rules: {
    'react/prop-types': 'error',
    // TypeScript's `noFallthroughCasesInSwitch` option is more robust (#6906)
    'default-case': 'off',
    // 'tsc' already handles this (https://github.com/typescript-eslint/typescript-eslint/issues/291)
    'no-dupe-class-members': 'off',
    // 'tsc' already handles this (https://github.com/typescript-eslint/typescript-eslint/issues/477)
    'no-undef': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        args: 'none',
        ignoreRestSiblings: true,
      },
    ],
    'no-extra-boolean-cast': 'off',
    'no-console': 'warn',
    'no-restricted-syntax': [
      'error',
      // For Segment events, use the methods qoqa_web exports instead of
      // calling them from the analytics object directly
      {
        selector:
          "CallExpression[callee.object.object.name='window'][callee.object.property.name='analytics'][callee.property.name='page']",
        message:
          "Please use the pushPageEventToSegment method from 'api/tracking/segment/segmentPushEvent' instead",
      },
      {
        selector:
          "CallExpression[callee.object.object.name='window'][callee.object.property.name='analytics'][callee.property.name='track']",
        message:
          "Please use the pushTrackEventToSegment method from 'api/tracking/segment/segmentPushEvent' instead",
      },
      {
        selector:
          "CallExpression[callee.object.object.name='window'][callee.object.property.name='analytics'][callee.property.name='identify']",
        message:
          "Please use the pushIdentifyEventToSegment method from 'api/tracking/segment/segmentPushEvent' instead",
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['*../qoqa_web/*'],
            message: "Use absolute imports from 'qoqa_web/...' instead",
          },
          {
            group: ['@qoqa/qoqa_web'],
            message:
              'Do not use the barrel import @qoqa/qoqa_web. Use absolute imports instead',
          },
          {
            group: ['**/entry'],
            message:
              'Import the symbols from their original file directly instead of the re-exporting entry',
          },
          {
            group: ['@mui/*/*/*', '!@mui/material/test-utils/*'],
            message:
              'Import MUI components from their 2nd folder level, not any deeper. See https://mui.com/guides/minimizing-bundle-size/#option-1',
          },
          {
            group: ['@mui/*'],
            importNames: ['makeStyles'],
            message:
              "Don't use makeStyles, use emotion or sx prop instead. See https://mui.com/material-ui/migration/migrating-from-jss/",
          },
        ],
      },
    ],
    eqeqeq: ['warn', 'smart'],
    curly: 'error',
    'linebreak-style': ['error', 'unix'],

    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'array-simple',
      },
    ],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-unescaped-entities': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'function-declaration',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-curly-brace-presence': [
      'error',
      { props: 'never', children: 'never' },
    ],
    'import/no-restricted-paths': [
      'error',
      {
        zones: [
          {
            target: './packages/qoqa_web',
            from: './node_modules/react-i18next',
            message:
              'Do not import react-i18next in any exported symbol (such as components in packages/qoqa_web)',
          },
        ],
      },
    ],
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: false,
        },
        'newlines-between': 'always',
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
      },
    ],
    'no-return-await': 'error',
    'max-params': ['error', 3],
    camelcase: [
      'warn',
      { ignoreDestructuring: true, ignoreImports: true, properties: 'never' },
    ],
    'no-restricted-globals': [
      'error',
      {
        name: 'JSX',
        message: 'Deprecated, use React.JSX instead',
      },
    ],
    'jest/no-conditional-expect': 'off',
    'import/dynamic-import-chunkname': ['error'],
    'object-shorthand': ['error', 'always'],
  },
  overrides: [
    {
      files: ['*.tsx'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'error',
      },
    },
  ],
};

module.exports = config;
