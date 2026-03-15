import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-plugin-prettier';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';

export default tseslint.config(
  { ignores: ['dist', 'build', 'node_modules'] },

  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],

    files: ['**/*.{ts,tsx}'],

    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: globals.browser,
    },

    plugins: {
      react,
      'react-hooks': reactHooks,
      prettier,
      import: importPlugin,
    },

    rules: {
      ...reactHooks.configs.recommended.rules,

      'prettier/prettier': 'error',
      'react/prop-types': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],

      'import/order': [
        'error',
        {
          groups: [
            ['builtin', 'external'],
            'internal',
            ['parent', 'sibling', 'index'],
            'type',
          ],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
    },

    settings: { react: { version: 'detect' } },
  }
);
