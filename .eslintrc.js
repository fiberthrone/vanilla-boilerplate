module.exports = {
  parserOptions: {
    ecmaVersion: 6
  },
  extends: ["eslint:recommended", "prettier"],
  env: {
    node: true
  },
  overrides: [
    Object.assign(
      {
        files: ["**/*.test.js"],
        env: { browser: true, jest: true },
        plugins: ["jest"]
      },
      require("eslint-plugin-jest").configs.recommended
    )
  ]
};
