import js from "@eslint/js";
import tsEslint from "typescript-eslint";
import nextPlugin from "@next/eslint-plugin-next";

export default tsEslint.config(
  js.configs.recommended,

  ...tsEslint.configs.strictTypeChecked.map((config) => ({
    ...config,
    files: ["src/**/*.{ts,tsx}"],
  })),

  {
    files: ["src/**/*.{ts,tsx}"],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  {
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
    },
  },

  {
    ignores: [".next/*", "out/*", "public/*"],
  },
);
