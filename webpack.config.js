const path = require("path");
const CompressionWebpackPlugin = require("compression-webpack-plugin");

module.exports = {
  entry: "./src/amplitude-wrapper.js",
  plugins: [
    new CompressionWebpackPlugin({
      filename: "[path][base].br",
      algorithm: "brotliCompress",
    })
  ],
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
};
