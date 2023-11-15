module.exports = {
  extends: ["stylelint-config-standard-scss", "stylelint-config-recess-order"],
  plugins: ["stylelint-no-unsupported-browser-features"],
  rules: {
    "plugin/no-unsupported-browser-features": [
      true,
      {
        ignore: ["css-nesting"],
        severity: "error",
      },
    ],
  },
};
