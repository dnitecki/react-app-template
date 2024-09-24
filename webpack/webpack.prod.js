const webpack = require("webpack");

module.exports = {
  mode: "production",
  plugins: [
    // Define new env variables
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("production"),
    }),
  ],
};
