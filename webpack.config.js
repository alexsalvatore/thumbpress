const path = require("path");
module.exports = {
  entry: "./src/app.js",
  output: { filename: "thumbpress.js", path: path.resolve(__dirname, "dist") },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },
};
