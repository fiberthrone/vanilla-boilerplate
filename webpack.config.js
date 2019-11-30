const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "public")
  }
};
