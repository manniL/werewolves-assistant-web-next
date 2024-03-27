import { OFF } from "../eslint.constants.mjs";

const ESLINT_MODULES_CONFIG = {
  files: ["modules/**/*.module.ts"],
  rules: { "import/no-default-export": OFF },
};

export { ESLINT_MODULES_CONFIG };