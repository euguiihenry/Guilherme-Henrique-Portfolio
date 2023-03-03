const path = require("path");

module.exports = {
  // ... other webpack config options ...
    resolve: {
        fallback: {
            os: require.resolve("os-browserify/browser"),
        },
    },
};
