module.exports = {
  env: [
    'browser',
    'shared-node-browser',
    'es2022',
  ],
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  ignorePatterns: [
    '**/.chorus',
    '**/node_modules',
    '**/__generated__',
    '**/dist/**',
  ],
  overrides: [
    {
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx', '**/*.svelte'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 'latest',
        extraFileExtensions: ['.svelte'],
        project: [
          './tsconfig.json',
          './.svelte-kit/tsconfig.json',
        ],
      },
      plugins: [
        '@typescript-eslint',
        'typescript-sort-keys',
        'sort-destructure-keys',
        'sort-keys-plus',
      ],
      rules: {
        '@typescript-eslint/indent': [
          'error',
          2,
          {
            ignoredNodes: [
              'TSTypeParameterInstantiation',
              'FunctionExpression > .params[decorators.length > 0]',
              'FunctionExpression > .params > :matches(Decorator, :not(:first-child))',
              'ClassBody.body > PropertyDefinition[decorators.length > 0] > .key',
            ],
          },
        ],
        '@typescript-eslint/member-delimiter-style': [
          'warn',
          {
            multiline: {
              delimiter: 'none',
            },
            singleline: {
              delimiter: 'comma',
              requireLast: false,
            },
          },
        ],
        // FIXME: Getting lots of false positives for no-unsafe rules.
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            args: 'after-used',
            argsIgnorePattern: '^_',
            destructuredArrayIgnorePattern: '^_',
            ignoreRestSiblings: true,
            varsIgnorePattern: '^_',
          },
        ],
        '@typescript-eslint/object-curly-spacing': [
          'warn',
          'always',
        ],
        '@typescript-eslint/quotes': [
          'warn',
          'single',
          {
            allowTemplateLiterals: true,
            avoidEscape: true,
          },
        ],
        '@typescript-eslint/require-await': 'off',
        '@typescript-eslint/semi': [
          'warn',
          'never',
          {
            beforeStatementContinuationChars: 'always',
          },
        ],
        'object-curly-spacing': 'off',
        'quotes': 'off',
        'semi': 'off',
        'typescript-sort-keys/interface': 'warn',
        'typescript-sort-keys/string-enum': 'warn',
      },
    },
    {
      extends: [
        'plugin:svelte/recommended',
      ],
      files: ['**/*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      rules: {
        'svelte/html-closing-bracket-spacing': 'warn',
        'svelte/html-quotes': [
          'warn',
          {
            prefer: 'single',
          },
        ],
        'svelte/html-self-closing': [
          'warn',
          'all',
        ],
        'svelte/indent': [
          'warn',
          {
            indent: 2,
          },
        ],
        'svelte/mustache-spacing': 'warn',
        'svelte/no-extra-reactive-curlies': 'warn',
        'svelte/no-spaces-around-equal-signs-in-attribute': 'warn',
        'svelte/prefer-class-directive': 'warn',
        'svelte/prefer-destructured-store-props': 'warn',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  plugins: [
    'import',
    'sort-keys-plus',
  ],
  root: true,
  rules: {
    'arrow-parens': [
      'warn',
      'as-needed',
    ],
    'comma-dangle': ['warn', 'always-multiline'],
    'eqeqeq': ['error', 'smart'],
    'import/default': 'off',
    'import/export': 'warn',
    'import/no-named-as-default-member': 'off',
    'import/order': [
      'warn',
      {
        'alphabetize': {
          caseInsensitive: true,
          order: 'asc',
        },
        'groups': [
          'unknown',
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
        ],
        'newlines-between': 'always',
        'warnOnUnassignedImports': true,
      },
    ],
    'indent': 'off',
    'jsx-quotes': [
      'warn',
      'prefer-single',
    ],
    'no-inner-declarations': 'off',
    'no-multiple-empty-lines': [
      'warn',
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 1,
      },
    ],
    'no-unused-vars': 'off',
    'object-curly-spacing': [
      'warn',
      'always',
    ],
    'quote-props': ['warn', 'consistent-as-needed'],
    'quotes': [
      'warn',
      'single',
      {
        allowTemplateLiterals: true,
        avoidEscape: true,
      },
    ],
    'semi': [
      'warn',
      'never',
      {
        beforeStatementContinuationChars: 'always',
      },
    ],
    'sort-destructure-keys/sort-destructure-keys': [
      'warn',
      {
        caseSensitive: false,
      },
    ],
    'sort-imports': 'off',
    'sort-keys': 'off',
    'sort-keys-plus/sort-keys': [
      'warn',
      'asc',
      {
        caseSensitive: false,
        minKeys: 2,
        natural: true,
      },
    ],
    'space-before-function-paren': [
      'warn',
      'always',
    ],
    'template-curly-spacing': ['warn', 'always'],
  },
  settings: {
    'import/cache': {
      lifetime: '∞',
    },
    'import/extensions': [
      '.js',
      '.ts',
      '.mjs',
      '.mts',
      '.cjs',
      '.cts',
      '.svelte',
      '.d.ts',
    ],
    'import/internal-regex': `^$(lib|styles|components)\b`,
    'import/parsers': {
      '@babel/parser': ['.js', '.jsx', '.cjs', '.mjs'],
      '@typescript-eslint/parser': ['.d.ts', '.ts', '.tsx'],
      'svelte-eslint-parser': ['.svelte'],
    },
    'import/resolver': {
      'custom-alias': {
        alias: {
          $components: './src/components',
          $lib: './src/lib',
          $styles: './src/styles',
        },
      },
      'node': true,
      'typescript': {
        alwaysTryTypes: true,
        project: [
          './tsconfig.json',
          './.svelte-kit/tsconfig.json',
        ],
      },
    },
  },
}
