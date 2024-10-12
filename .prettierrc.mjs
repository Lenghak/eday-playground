/** @type {import("prettier").Config} */
export default {
  arrowParens: "always",
  bracketSpacing: true,
  singleAttributePerLine: true,
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  parser: "typescript",
  plugins: ["prettier-plugin-astro", "@trivago/prettier-plugin-sort-imports"],
  importOrder: ["<THIRD_PARTY_MODULES>", "^[./]", "^@/types/(.*)$"],
  importOrderParserPlugins: ["typescript", "decorators-legacy"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
    {
      files: "*.jdon",
      options: {
        parser: "json",
      },
    },
  ],
  filepath: "./src/*",
};
