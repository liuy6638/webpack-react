const path = require("path");

module.exports = {
  // 设置入口文件
  entry: path.resolve(__dirname, "../src/index.jsx"),
  resolve: {
    // 设置扩展，这样导入文件时可以省去写扩展名
    extensions: [".js", ".json", ".jsx"],
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.jsx$/,
        include: path.resolve(__dirname, "../src"),
        use: "eslint-loader"
      },
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, "../src"),
        use: "babel-loader"
      }
    ]
  }
};