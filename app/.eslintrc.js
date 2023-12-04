module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb', "prettier"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
    "import/prefer-default-export": "off",
    "default-param-last": "off",
    "object-shorthand": ["off", "always"],
    "prefer-const": "off",
    "react/prop-types": "off",
    "no-unneeded-ternary": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "no-nested-ternary": "off",
  },
};
