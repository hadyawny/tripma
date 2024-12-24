import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

try {
  eslintConfig = [...compat.extends("next/core-web-vitals")];
} catch (error) {
  console.error("Error resolving ESLint configuration:", error);
}
export default eslintConfig;
