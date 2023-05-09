module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react'],
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'arrow-body-style': ['error', 'as-needed'],
    'react/self-closing-comp': ['error', { component: true, html: true }],
    'react/react-in-jsx-scope': 'off',
  },
};
