import pluginJs from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import importPlugin from 'eslint-plugin-import-x'
import pluginReact from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import { configs as tsEslintConfigs } from 'typescript-eslint'
import * as tsResolver from 'eslint-import-resolver-typescript'

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'] },
  { ignores: ['dist', 'coverage'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tsEslintConfigs.recommended,
  reactRefresh.configs.vite,
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.react,
  importPlugin.flatConfigs.typescript,
  pluginReact.configs.flat['jsx-runtime'],
  eslintConfigPrettier,
  {
    files: ['**/*.{ts,tsx}'],
    settings: {
      'import-x/resolver': {
        name: 'tsResolver',
        resolver: tsResolver,
        options: { project: ['./tsconfig.node.json', './tsconfig.app.json'] },
      },
    },
    plugins: { 'react-hooks': reactHooks },
    rules: {
      ...reactHooks.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      'import-x/no-cycle': 'error',
      'import-x/order': [
        'error',
        {
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
          warnOnUnassignedImports: true,
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
        },
      ],
    },
  },
]
