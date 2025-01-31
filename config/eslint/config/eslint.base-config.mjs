import Vitest from "eslint-plugin-vitest";

import { ERROR, OFF, MAX_NESTED_CALLBACK, MAX_PARAMS, ALWAYS, NEVER, READONLY, MAX_LINES_PER_FUNCTION_DEFAULT_CONFIG } from "../eslint.constants.mjs";

const ESLINT_BASE_CONFIG = Object.freeze({
  languageOptions: {
    globals: {
      process: READONLY,
      Buffer: READONLY,
      defineNuxtConfig: READONLY,
      defineNuxtPlugin: READONLY,
      defineI18nConfig: READONLY,
      useRuntimeConfig: READONLY,
      useRoute: READONLY,
      definePageMeta: READONLY,
      setPageLayout: READONLY,
      createError: READONLY,
      useFetch: READONLY,
      useImage: READONLY,
      $fetch: READONLY,
      useI18n: READONLY,
      useHead: READONLY,
      navigateTo: READONLY,
      storeToRefs: READONLY,
      ...Vitest.environments.env.globals,
      computed: READONLY,
      defineProps: READONLY,
      defineEmits: READONLY,
      ref: READONLY,
      reactive: READONLY,
      onMounted: READONLY,
      watch: READONLY,
      nextTick: READONLY,
      useScroll: READONLY,
    },
  },
  rules: {
    // ---- ESLint Rules -----
    // - Possible Problems (https://eslint.org/docs/rules/#possible-problems)
    "array-callback-return": ERROR,
    "constructor-super": ERROR,
    "for-direction": ERROR,
    "getter-return": ERROR,
    "no-async-promise-executor": ERROR,
    "no-await-in-loop": ERROR,
    "no-class-assign": ERROR,
    "no-compare-neg-zero": ERROR,
    "no-cond-assign": ERROR,
    "no-const-assign": ERROR,
    "no-constant-condition": ERROR,
    "no-constructor-return": ERROR,
    "no-control-regex": ERROR,
    "no-debugger": ERROR,
    "no-dupe-args": ERROR,
    "no-dupe-class-members": ERROR,
    "no-dupe-else-if": ERROR,
    "no-dupe-keys": ERROR,
    "no-duplicate-case": ERROR,
    "no-duplicate-imports": OFF,
    "no-empty-character-class": ERROR,
    "no-empty-pattern": ERROR,
    "no-ex-assign": ERROR,
    "no-fallthrough": ERROR,
    "no-func-assign": ERROR,
    "no-import-assign": ERROR,
    "no-inner-declarations": ERROR,
    "no-invalid-regexp": ERROR,
    "no-irregular-whitespace": ERROR,
    "no-loss-of-precision": ERROR,
    "no-misleading-character-class": ERROR,
    "no-new-native-nonconstructor": ERROR,
    "no-new-symbol": ERROR,
    "no-obj-calls": ERROR,
    "no-promise-executor-return": ERROR,
    "no-prototype-builtins": ERROR,
    "no-self-assign": ERROR,
    "no-self-compare": ERROR,
    "no-setter-return": ERROR,
    "no-sparse-arrays": ERROR,
    "no-template-curly-in-string": ERROR,
    "no-this-before-super": ERROR,
    "no-undef": [ERROR],
    "no-unexpected-multiline": ERROR,
    "no-unmodified-loop-condition": ERROR,
    "no-unreachable": ERROR,
    "no-unreachable-loop": ERROR,
    "no-unsafe-finally": ERROR,
    "no-unsafe-negation": ERROR,
    "no-unsafe-optional-chaining": ERROR,
    "no-unused-private-class-members": ERROR,
    "no-unused-vars": ERROR,
    "no-use-before-define": ERROR,
    "no-useless-backreference": ERROR,
    "require-atomic-updates": OFF,
    "use-isnan": ERROR,
    "valid-typeof": ERROR,
    // ---- ESLint Rules -----
    // - Suggestions (https://eslint.org/docs/rules/#suggestions)
    "accessor-pairs": ERROR,
    "arrow-body-style": [ERROR, "as-needed"],
    "block-scoped-var": ERROR,
    "camelcase": [ERROR, { allow: ["npm_package_version"] }],
    "capitalized-comments": [ERROR, NEVER, { ignorePattern: "TODO|Stryker" }],
    "class-methods-use-this": ERROR,
    "complexity": ERROR,
    "consistent-return": ERROR,
    "consistent-this": ERROR,
    "curly": ERROR,
    "default-case": ERROR,
    "default-case-last": ERROR,
    "default-param-last": ERROR,
    "dot-notation": ERROR,
    "eqeqeq": ERROR,
    "func-name-matching": OFF,
    "func-names": ERROR,
    "func-style": [ERROR, "declaration", { allowArrowFunctions: true }],
    "grouped-accessor-pairs": ERROR,
    "guard-for-in": ERROR,
    "id-denylist": OFF,
    "id-length": [ERROR, { exceptions: ["t", "i", "x", "y"] }],
    "id-match": OFF,
    "init-declarations": OFF,
    "logical-assignment-operators": ERROR,
    "max-classes-per-file": ERROR,
    "max-depth": OFF,
    "max-lines": OFF,
    "max-lines-per-function": [ERROR, MAX_LINES_PER_FUNCTION_DEFAULT_CONFIG],
    "max-nested-callbacks": [ERROR, MAX_NESTED_CALLBACK],
    "max-params": [ERROR, MAX_PARAMS],
    "max-statements": OFF,
    "multiline-comment-style": [ERROR, "separate-lines"],
    "new-cap": ERROR,
    "no-alert": ERROR,
    "no-array-constructor": ERROR,
    "no-bitwise": ERROR,
    "no-caller": ERROR,
    "no-case-declarations": ERROR,
    "no-console": ERROR,
    "no-continue": ERROR,
    "no-delete-var": ERROR,
    "no-div-regex": ERROR,
    "no-else-return": ERROR,
    "no-empty": ERROR,
    "no-empty-function": ERROR,
    "no-eq-null": ERROR,
    "no-eval": ERROR,
    "no-extend-native": ERROR,
    "no-extra-bind": ERROR,
    "no-extra-boolean-cast": ERROR,
    "no-extra-label": ERROR,
    "no-global-assign": ERROR,
    "no-implicit-coercion": [ERROR, { allow: ["!!"] }],
    "no-implicit-globals": ERROR,
    "no-implied-eval": ERROR,
    "no-inline-comments": ERROR,
    "no-invalid-this": ERROR,
    "no-iterator": ERROR,
    "no-label-var": ERROR,
    "no-labels": ERROR,
    "no-lone-blocks": ERROR,
    "no-lonely-if": ERROR,
    "no-loop-func": ERROR,
    "no-magic-numbers": [
      ERROR, {
        ignoreArrayIndexes: true,
        ignoreDefaultValues: true,
        ignore: [0, -1, 1],
      },
    ],
    "no-multi-assign": ERROR,
    "no-multi-str": ERROR,
    "no-negated-condition": OFF,
    "no-nested-ternary": ERROR,
    "no-new": ERROR,
    "no-new-func": ERROR,
    "no-new-wrappers": ERROR,
    "no-nonoctal-decimal-escape": ERROR,
    "no-object-constructor": ERROR,
    "no-octal": ERROR,
    "no-octal-escape": ERROR,
    "no-param-reassign": [ERROR, { props: true }],
    "no-plusplus": OFF,
    "no-proto": ERROR,
    "no-redeclare": ERROR,
    "no-regex-spaces": ERROR,
    "no-restricted-exports": OFF,
    "no-restricted-globals": OFF,
    "no-restricted-properties": OFF,
    "no-restricted-syntax": [ERROR, "SwitchStatement", "SwitchCase", "DoWhileStatement"],
    "no-return-assign": ERROR,
    "no-script-url": ERROR,
    "no-sequences": ERROR,
    "no-shadow": ERROR,
    "no-shadow-restricted-names": ERROR,
    "no-ternary": OFF,
    "no-throw-literal": ERROR,
    "no-undef-init": ERROR,
    "no-undefined": OFF,
    "no-underscore-dangle": [ERROR, { allow: ["_id"] }],
    "no-unneeded-ternary": ERROR,
    "no-unused-expressions": ERROR,
    "no-unused-labels": ERROR,
    "no-useless-call": ERROR,
    "no-useless-catch": ERROR,
    "no-useless-computed-key": ERROR,
    "no-useless-concat": ERROR,
    "no-useless-constructor": ERROR,
    "no-useless-escape": ERROR,
    "no-useless-rename": ERROR,
    "no-useless-return": ERROR,
    "no-var": ERROR,
    "no-void": [ERROR, { allowAsStatement: true }],
    "no-warning-comments": OFF,
    "no-with": ERROR,
    "object-shorthand": ERROR,
    "one-var": [ERROR, NEVER],
    "operator-assignment": [ERROR, ALWAYS],
    "prefer-arrow-callback": ERROR,
    "prefer-const": ERROR,
    "prefer-destructuring": OFF,
    "prefer-exponentiation-operator": ERROR,
    "prefer-named-capture-group": ERROR,
    "prefer-numeric-literals": ERROR,
    "prefer-object-has-own": ERROR,
    "prefer-object-spread": ERROR,
    "prefer-promise-reject-errors": ERROR,
    "prefer-regex-literals": ERROR,
    "prefer-rest-params": ERROR,
    "prefer-spread": ERROR,
    "prefer-template": ERROR,
    "radix": [ERROR, "as-needed"],
    "require-await": ERROR,
    "require-unicode-regexp": ERROR,
    "require-yield": ERROR,
    "sort-imports": OFF,
    "sort-keys": OFF,
    "sort-vars": OFF,
    "strict": OFF,
    "symbol-description": ERROR,
    "vars-on-top": ERROR,
    "yoda": ERROR,
    // ---- ESLint Rules -----
    // - Layout & Formatting (https://eslint.org/docs/rules/#layout-formatting)
    "line-comment-position": ERROR,
    "unicode-bom": ERROR,
  },
});

export { ESLINT_BASE_CONFIG };