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
  tailwindAttributes: ["class", "className$"],
  tailwindFunctions: ["cn", "clsx", "cva", "twMerge"],
  parser: "typescript",
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  importOrder: [
    "^next(.*)$",
    "^react(.*)$",
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
    {
      files: ["*.yml", "*.yaml"],
      options: {
        parser: "yaml",
      },
    },
    {
      files: "*.md",
      options: {
        parser: "markdown",
      },
    },
  ],
};
