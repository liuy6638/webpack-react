const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const merge = require("webpack-merge");
const common = require("./webpack.common");

// 使用webpack-merge将webpack.common.js合并进来
module.exports = merge(common, {
  // 设置为开发（development）模式
  mode: "development",
  // 设置source map,方便debugger
  devtool: "inline-source-map",
  output: {
    // 设置出口文件名
    filename: "main.js",
    // 设置出口文件的目录
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/"
  },
  devServer: {
    // 单页应用的前端路由使用history模式时，这个配置很重要
    // webpack-dev-server服务器接受的请求路径没有匹配的资源时
    // 他会返回index.html而不是404页面
    historyApiFallback: true,
    hot: true, // 开启热更新
    // host: "0.0.0.0",   // 设置0.0.0.0 外部可以用ip访问
    port: 8080,
    overlay: {        // 有报错时，浏览器全屏覆盖
      errors: true
    },
    stats: 'errors-only', // 命令窗只显示错误信息
    // 如果需要代理的话可以配置proxy选项
    // proxy: {
    //   "/api": "http://localhost:8080"
    // },
    open: true // 自动打开浏览器
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        // 对css文件先后使用css-loader和style-loader
        // css-loader可以将导入项目的css变为js模块
        // style-loader可以让页面打开时，利用js将css模块
        // 内的样式注入到html头部的style标签内
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        // 使用file-loader来加载图片文件
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        use: "file-loader"
      }
    ]
  },
  plugins: [
    // 该插件能将生成的入口js文件注入到模板html内
    new HtmlWebpackPlugin({
      // 设置模板的路径
      template: path.resolve(__dirname, "../public/index.html"),
      // 设置favicon的路径
      favicon: path.resolve(__dirname, "../public/favicon.ico")
    })
  ]
});