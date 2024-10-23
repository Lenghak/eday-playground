/** @type {import("eslint").Linter.Config} */
const config = {
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "next",
    "prettier",
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    "prettier/prettier": "error",
  },
  overrides: [
    {
      extends: [
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
      files: ["*.ts", "*.tsx"],
      parserOptions: {
        project: ["./tsconfig.json"],
      },
      rules: {
        "@typescript-eslint/consistent-type-imports": [
          "warn",
          {
            prefer: "type-imports",
            fixStyle: "inline-type-imports",
          },
        ],
        "@typescript-eslint/no-unused-vars": [
          "error",
          { argsIgnorePattern: "^_" },
        ],
        "@typescript-eslint/no-misused-promises": [
          2,
          {
            checksVoidReturn: {
              attributes: false,
            },
          },
        ],
      },
    },
    {
      files: ["src/**/*"],
      plugins: ["check-file"],
      rules: {
        "check-file/no-index": "error",
        "check-file/filename-blocklist": [
          "error",
          {
            "**/*.model.ts": "*.models.ts",
            "**/*.util.ts": "*.utils.ts",
          },
        ],
        "check-file/filename-naming-convention": [
          "error",
          {
            "**/*.{ts,tsx}": "KEBAB_CASE",
          },
        ],
      },
    },
  ],
  ignorePatterns: [".eslintrc.cjs"],
};

module.exports = config;
