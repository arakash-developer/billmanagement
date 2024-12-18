import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;

module.exports = {
  extends: 'next/core-web-vitals',
  rules: {
    'prefer-const': 'warn', // Change 'prefer-const' to a warning
    'no-unused-vars': ['warn', { vars: 'all', args: 'none' }],
  },
};
