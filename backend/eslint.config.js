const js = require("@eslint/js");

module.exports = [
  {
    files: ["**/*.js"],
    ignores: ["node_modules/**"],
  },

  js.configs.recommended,

  {
    languageOptions: {
      globals: {
        console: "readonly",
        process: "readonly",
        require: "readonly",
        module: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
      },
    },

    rules: {
      "no-unused-vars": "warn",
      "no-undef": "error",
    },
  },

  // Configuration pour les tests Jest
  {
    files: ["tests/**/*.js", "**/*.test.js"],
    languageOptions: {
      globals: {
        test: "readonly",
        expect: "readonly",
        describe: "readonly",
        it: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
        beforeAll: "readonly",
        afterAll: "readonly",
        jest: "readonly",
      },
    },
  },
];