import { dirname } from 'path';
import { fileURLToPath } from 'url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

export default [
  ...compat.extends(
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-native/all',
    'prettier'
  ),
  {
    ignores: ['node_modules/**', 'dist/**', 'build/**', 'babel.config.js'],
    settings: { react: { version: 'detect' } },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react-native/no-color-literals': 'off',
      'react-native/sort-styles': 'off',
    },
  },
];
