const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  map: { inline: false },
  plugins: [
    require("postcss-sort-media-queries")({
      sort: "mobile-first",
    }),
  ].concat(
    isProduction
      ? [
          require("cssnano")({
            preset: "default",
          }),
        ]
      : [],
  ),
};
