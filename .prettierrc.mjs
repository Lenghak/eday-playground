/** @type {import("prettier").Config} */
export default {
  arrowParens: "always",
  bracketSpacing: true,
  htmlWhitespaceSensitivity: "css",
  jsxSingleQuote: false,
  singleAttributePerLine: true,
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  parser: "typescript",
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  importOrder: [
    "^react(.*)$",
    "^@remix-run/(.*)$",
    "^@/modules/(.*)$",
    "^@/components/(.*)$",
    "^@/hooks/(.*)$",
    "^@/lib/(.*)$",
    "<THIRD_PARTY_MODULES>",
    "^[./]",
    "^@/types/(.*)$",
    "^@/styles/(.*)$",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
  overrides: [
    {
      files: ["*.scss", "*.css"],
      options: { parser: "scss" },
    },
    {
      files: "*.json",
      options: { parser: "json" },
    },
  ],
};
