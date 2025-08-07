module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    // Aquí defines tus reglas personalizadas
    'no-unused-vars': 'warn',
    'no-console': 'off',
    'eqeqeq': 'error',
    'semi': ['error', 'always'],
  },
};
