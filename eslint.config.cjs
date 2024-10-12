const eslintPluginAstro = require("eslint-plugin-astro");
const eslintPrettierPlugin = require("eslint-plugin-prettier");
const eslintConfigPrettier = require("eslint-config-prettier");

const globals = require("globals");

/** @type {import('eslint').Linter[]} */
module.exports = [
  // js.configs.recommended
  {
    files: ["**/*.{astro}"],
    ...eslintPluginAstro.configs["flat/jsx-a11y-recommended"],
  },
  {
    files: ["**/*.{mjs,cjs,js,ts}"],
    languageOptions: {
      globals: {
        ...globals.es2021,
      },
      // ecmascriptVersion, and sourceType, default is right
    },
    // extends: ['plugin:prettier/recommended', 'airbnb-base'],
    plugins: {
      prettier: eslintPrettierPlugin,
    },
    rules: {
      ...eslintPrettierPlugin.configs.recommended.rules,
      ...eslintConfigPrettier.rules,
    },
  },
];
