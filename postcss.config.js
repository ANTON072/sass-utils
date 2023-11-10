module.exports = {
  map: { inline: false },
  plugins: [
    require("postcss-sort-media-queries")({
      sort: "mobile-first",
    }),
  ],
};
