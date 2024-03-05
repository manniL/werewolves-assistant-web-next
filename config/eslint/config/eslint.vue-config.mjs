import VueParser from "vue-eslint-parser";
import TypescriptParser from "@typescript-eslint/parser";
import TypeScriptPlugin from "@typescript-eslint/eslint-plugin";

import { ALWAYS, ERROR, MAX_LENGTH_DEFAULT_CONFIG, NEVER, OFF } from "../eslint.constants.mjs";

import { ESLINT_TYPESCRIPT_CONFIG } from "./eslint.typescript-config.mjs";

const ESLINT_VUE_CONFIG = {
  files: [
    "app.vue",
    "pages/**/*.vue",
    "layouts/**/*.vue",
    "components/**/*.vue",
  ],
  plugins: { "@typescript-eslint": TypeScriptPlugin },
  languageOptions: {
    parser: VueParser,
    parserOptions: {
      parser: TypescriptParser,
      tsconfigRootDir: "./",
      sourceType: "module",
      extraFileExtensions: [".vue"],
      project: "./tsconfig.json",
    },
  },
  rules: {
    ...ESLINT_TYPESCRIPT_CONFIG.rules,
    "id-length": [ERROR, { exceptions: ["t", "i"] }],
    "import/unambiguous": OFF,
    "vue/comment-directive": ERROR,
    "vue/jsx-uses-vars": ERROR,
    // ---- Vue Rules -----
    // - Priority A: Essential (Error Prevention) https://eslint.vuejs.org/rules/#priority-a-essential-error-prevention
    "vue/multi-word-component-names": ERROR,
    "vue/no-arrow-functions-in-watch": ERROR,
    "vue/no-async-in-computed-properties": ERROR,
    "vue/no-child-content": ERROR,
    "vue/no-computed-properties-in-data": ERROR,
    "vue/no-custom-modifiers-on-v-model": ERROR,
    "vue/no-deprecated-data-object-declaration": ERROR,
    "vue/no-deprecated-destroyed-lifecycle": ERROR,
    "vue/no-deprecated-dollar-listeners-api": ERROR,
    "vue/no-deprecated-dollar-scopedslots-api": ERROR,
    "vue/no-deprecated-events-api": ERROR,
    "vue/no-deprecated-filter": ERROR,
    "vue/no-deprecated-functional-template": ERROR,
    "vue/no-deprecated-html-element-is": ERROR,
    "vue/no-deprecated-inline-template": ERROR,
    "vue/no-deprecated-props-default-this": ERROR,
    "vue/no-deprecated-router-link-tag-prop": ERROR,
    "vue/no-deprecated-scope-attribute": ERROR,
    "vue/no-deprecated-slot-attribute": ERROR,
    "vue/no-deprecated-slot-scope-attribute": ERROR,
    "vue/no-deprecated-v-bind-sync": ERROR,
    "vue/no-deprecated-v-is": ERROR,
    "vue/no-deprecated-v-on-native-modifier": ERROR,
    "vue/no-deprecated-v-on-number-modifiers": ERROR,
    "vue/no-deprecated-vue-config-keycodes": ERROR,
    "vue/no-dupe-keys": ERROR,
    "vue/no-dupe-v-else-if": ERROR,
    "vue/no-duplicate-attributes": ERROR,
    "vue/no-export-in-script-setup": ERROR,
    "vue/no-expose-after-await": ERROR,
    "vue/no-lifecycle-after-await": ERROR,
    "vue/no-multiple-template-root": ERROR,
    "vue/no-mutating-props": ERROR,
    "vue/no-parsing-error": ERROR,
    "vue/no-ref-as-operand": ERROR,
    "vue/no-reserved-component-names": ERROR,
    "vue/no-reserved-keys": ERROR,
    "vue/no-reserved-props": ERROR,
    "vue/no-shared-component-data": ERROR,
    "vue/no-side-effects-in-computed-properties": ERROR,
    "vue/no-template-key": ERROR,
    "vue/no-textarea-mustache": ERROR,
    "vue/no-unused-components": ERROR,
    "vue/no-unused-vars": ERROR,
    "vue/no-use-computed-property-like-method": ERROR,
    "vue/no-use-v-if-with-v-for": ERROR,
    "vue/no-useless-template-attributes": ERROR,
    "vue/no-v-for-template-key-on-child": ERROR,
    "vue/no-v-for-template-key": ERROR,
    "vue/no-v-model-argument": ERROR,
    "vue/no-v-text-v-html-on-component": ERROR,
    "vue/no-watch-after-await": ERROR,
    "vue/prefer-import-from-vue": ERROR,
    "vue/require-component-is": ERROR,
    "vue/require-prop-type-constructor": ERROR,
    "vue/require-render-return": ERROR,
    "vue/require-slots-as-functions": ERROR,
    "vue/require-toggle-inside-transition": ERROR,
    "vue/require-v-for-key": ERROR,
    "vue/require-valid-default-prop": ERROR,
    "vue/return-in-computed-property": ERROR,
    "vue/return-in-emits-validator": ERROR,
    "vue/use-v-on-exact": ERROR,
    "vue/valid-attribute-name": ERROR,
    "vue/valid-define-emits": ERROR,
    "vue/valid-define-props": ERROR,
    "vue/valid-model-definition": ERROR,
    "vue/valid-next-tick": ERROR,
    "vue/valid-template-root": ERROR,
    "vue/valid-v-bind-sync": ERROR,
    "vue/valid-v-bind": ERROR,
    "vue/valid-v-cloak": ERROR,
    "vue/valid-v-else-if": ERROR,
    "vue/valid-v-else": ERROR,
    "vue/valid-v-for": ERROR,
    "vue/valid-v-html": ERROR,
    "vue/valid-v-if": ERROR,
    "vue/valid-v-is": ERROR,
    "vue/valid-v-model": ERROR,
    "vue/valid-v-on": ERROR,
    "vue/valid-v-once": ERROR,
    "vue/valid-v-pre": ERROR,
    "vue/valid-v-show": ERROR,
    "vue/valid-v-slot": ERROR,
    "vue/valid-v-text": ERROR,
    // - Priority B: Strongly Recommended (Improving Readability) https://eslint.vuejs.org/rules/#priority-b-strongly-recommended-improving-readability
    "vue/attribute-hyphenation": ERROR,
    "vue/component-definition-name-casing": ERROR,
    "vue/first-attribute-linebreak": ERROR,
    "vue/html-closing-bracket-newline": ERROR,
    "vue/html-closing-bracket-spacing": [ERROR, { selfClosingTag: NEVER }],
    "vue/html-end-tags": ERROR,
    "vue/html-indent": ERROR,
    "vue/html-quotes": ERROR,
    "vue/html-self-closing": ERROR,
    "vue/max-attributes-per-line": ERROR,
    "vue/multiline-html-element-content-newline": ERROR,
    "vue/mustache-interpolation-spacing": ERROR,
    "vue/no-multi-spaces": ERROR,
    "vue/no-spaces-around-equal-signs-in-attribute": ERROR,
    "vue/no-template-shadow": ERROR,
    "vue/one-component-per-file": ERROR,
    "vue/prop-name-casing": ERROR,
    "vue/require-default-prop": ERROR,
    "vue/require-explicit-emits": ERROR,
    "vue/require-prop-types": ERROR,
    "vue/singleline-html-element-content-newline": ERROR,
    "vue/v-bind-style": ERROR,
    "vue/v-on-event-hyphenation": ERROR,
    "vue/v-on-style": ERROR,
    "vue/v-slot-style": ERROR,
    // - Priority C: Recommended (Potentially Dangerous Patterns) https://eslint.vuejs.org/rules/#priority-c-recommended-potentially-dangerous-patterns
    "vue/attributes-order": [ERROR, { alphabetical: true }],
    "vue/no-lone-template": ERROR,
    "vue/no-multiple-slot-args": ERROR,
    "vue/no-v-html": ERROR,
    "vue/order-in-components": ERROR,
    "vue/this-in-template": ERROR,
    // - Uncategorized https://eslint.vuejs.org/rules/#uncategorized
    "vue/block-lang": [
      ERROR,
      { script: { lang: "ts" } },
    ],
    "vue/block-order": [ERROR, { order: ["template", "script", "style"] }],
    "vue/block-tag-newline": ERROR,
    "vue/component-api-style": ERROR,
    "vue/component-name-in-template-casing": ERROR,
    "vue/component-options-name-casing": ERROR,
    "vue/custom-event-name-casing": ERROR,
    "vue/define-emits-declaration": ERROR,
    "vue/define-macros-order": ERROR,
    "vue/define-props-declaration": ERROR,
    "vue/html-button-has-type": ERROR,
    "vue/html-comment-content-newline": ERROR,
    "vue/html-comment-content-spacing": ERROR,
    "vue/html-comment-indent": ERROR,
    "vue/match-component-file-name": ERROR,
    "vue/match-component-import-name": ERROR,
    "vue/max-lines-per-block": ERROR,
    "vue/new-line-between-multi-line-property": ERROR,
    "vue/next-tick-style": ERROR,
    "vue/no-boolean-default": ERROR,
    "vue/no-deprecated-model-definition": ERROR,
    "vue/no-duplicate-attr-inheritance": ERROR,
    "vue/no-empty-component-block": ERROR,
    "vue/no-multiple-objects-in-class": ERROR,
    "vue/no-potential-component-option-typo": ERROR,
    "vue/no-ref-object-reactivity-loss": ERROR,
    "vue/no-required-prop-with-default": ERROR,
    "vue/no-restricted-block": ERROR,
    "vue/no-restricted-call-after-await": ERROR,
    "vue/no-restricted-class": ERROR,
    "vue/no-restricted-component-names": ERROR,
    "vue/no-restricted-component-options": ERROR,
    "vue/no-restricted-custom-event": ERROR,
    "vue/no-restricted-html-elements": ERROR,
    "vue/no-restricted-props": ERROR,
    "vue/no-restricted-static-attribute": ERROR,
    "vue/no-restricted-v-bind": ERROR,
    "vue/no-root-v-if": ERROR,
    "vue/no-setup-props-reactivity-loss": ERROR,
    "vue/no-static-inline-styles": ERROR,
    "vue/no-template-target-blank": ERROR,
    "vue/no-this-in-before-route-enter": ERROR,
    "vue/no-undef-components": [ERROR, { ignorePatterns: ["Nuxt*", "VuePrime*", "Glow*"] }],
    "vue/no-undef-properties": ERROR,
    "vue/no-unsupported-features": ERROR,
    "vue/no-unused-emit-declarations": ERROR,
    "vue/no-unused-properties": ERROR,
    "vue/no-unused-refs": ERROR,
    "vue/no-useless-mustaches": ERROR,
    "vue/no-useless-v-bind": ERROR,
    "vue/no-v-text": ERROR,
    "vue/padding-line-between-blocks": ERROR,
    "vue/padding-line-between-tags": ERROR,
    "vue/padding-lines-in-component-definition": ERROR,
    "vue/prefer-define-options": ERROR,
    "vue/prefer-prop-type-boolean-first": ERROR,
    "vue/prefer-separate-static-class": ERROR,
    "vue/prefer-true-attribute-shorthand": ERROR,
    "vue/require-direct-export": ERROR,
    "vue/require-emit-validator": ERROR,
    "vue/require-expose": ERROR,
    "vue/require-macro-variable-name": ERROR,
    "vue/require-name-property": ERROR,
    "vue/require-prop-comment": ERROR,
    "vue/require-typed-object-prop": ERROR,
    "vue/require-typed-ref": ERROR,
    "vue/script-indent": ERROR,
    "vue/sort-keys": OFF,
    "vue/static-class-names-order": ERROR,
    "vue/v-for-delimiter-style": ERROR,
    "vue/v-if-else-key": ERROR,
    "vue/v-on-handler-style": ERROR,
    "vue/valid-define-options": ERROR,
    // - Extension Rules https://eslint.vuejs.org/rules/#extension-rules
    "vue/array-bracket-newline": ERROR,
    "vue/array-bracket-spacing": ERROR,
    "vue/array-element-newline": ERROR,
    "vue/arrow-spacing": ERROR,
    "vue/block-spacing": ERROR,
    "vue/brace-style": ERROR,
    "vue/camelcase": ERROR,
    "vue/comma-dangle": ERROR,
    "vue/comma-spacing": ERROR,
    "vue/comma-style": ERROR,
    "vue/dot-location": ERROR,
    "vue/dot-notation": ERROR,
    "vue/eqeqeq": ERROR,
    "vue/func-call-spacing": ERROR,
    "vue/key-spacing": ERROR,
    "vue/keyword-spacing": ERROR,
    "vue/max-len": [ERROR, MAX_LENGTH_DEFAULT_CONFIG],
    "vue/multiline-ternary": [ERROR, NEVER],
    "vue/no-console": ERROR,
    "vue/no-constant-condition": ERROR,
    "vue/no-empty-pattern": ERROR,
    "vue/no-extra-parens": ERROR,
    "vue/no-irregular-whitespace": ERROR,
    "vue/no-loss-of-precision": ERROR,
    "vue/no-restricted-syntax": ERROR,
    "vue/no-sparse-arrays": ERROR,
    "vue/no-useless-concat": ERROR,
    "vue/object-curly-newline": [ERROR, { multiline: true }],
    "vue/object-curly-spacing": [ERROR, ALWAYS],
    "vue/object-property-newline": [ERROR, { allowAllPropertiesOnSameLine: true }],
    "vue/object-shorthand": ERROR,
    "vue/operator-linebreak": ERROR,
    "vue/prefer-template": ERROR,
    "vue/quote-props": ERROR,
    "vue/space-in-parens": ERROR,
    "vue/space-infix-ops": ERROR,
    "vue/space-unary-ops": ERROR,
    "vue/template-curly-spacing": ERROR,
  },
};

export { ESLINT_VUE_CONFIG };