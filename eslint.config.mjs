import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";

// ESLint 9 flat config. Next 16 removed `next lint`, so `pnpm lint` runs
// ESLint directly with the same preset the old .eslintrc.json used.
const compat = new FlatCompat({
  baseDirectory: dirname(fileURLToPath(import.meta.url)),
});

const config = [
  {
    ignores: [
      "**/.next/**",
      "**/node_modules/**",
      "out/**",
      "public/**",
      ".claude/**",
      "next-env.d.ts",
    ],
  },
  ...compat.extends("next/core-web-vitals"),
];

export default config;
