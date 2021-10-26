const path = require("path");

module.exports = {
  entry: "./src/amplitude-wrapper.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
};
