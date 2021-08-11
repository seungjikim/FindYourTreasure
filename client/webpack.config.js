// webpack 명령어가 실행되면 디폴트로 스크립트와 같은 경로에 있는 webpack.config.js 내용을 가지고 빌드됨.
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = {
  resolve: {
    fallback: {
      fs: false,
      net: false,
      tls: false,
    },
    modules: ["node_modules"], // nodemodules를 인식할 수 있도록함.
    extensions: [".js", ".json", ".jsx", "css", "scss"], //파일에 해당 확장자들을 안넣어줘도 됨.
  },
  mode: "development", // 웹팩 빌드 옵션 [ production: 최적화되어 빌드, development: 빠르게 빌드, none: 아무 기능없음 ]
  entry: ["./src/index.js"], // 이 파일 기준으로 import 되어있는 모든 파일들을 찾아 하나의 파일로 합침.
  output: {
    // 웹팩에서 빌드를 완료하면 output에 명시되어 있는 정보를 통해 빌드 파일을 생성함.
    filename: "bundle.[chunkhash].js",
    path: path.join(__dirname + "/build"), // __dirname은 ES 모듈에서 없기 때문에 path.resolve로 대체한다.
    publicPath: "/", // 파일들이 위치할 서버상의 경로
  },
  devServer: {
    contentBase: path.resolve("./build"),
    index: "index.html",
    port: 8080,
  },
  module: {
    // webpack의 loader 기능 사용. jsv파일이 아닌 파일을 웹팩이 이해하도록 해줌.
    rules: [
      {
        test: /\.(mjs|js|jsx)$/, // 파일을 가져올 정규식
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: { node: "current" },
                modules: "auto",
                useBuiltIns: "usage",
                corejs: 3,
              },
            ],
            "@babel/preset-react",
          ],
        },
        exclude: ["/node_moules/"],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"], // 오른쪽에서 왼쪽 순서로 실행됨. css-loader로 css파일을 읽고 읽은 파일을 MiniCssExtractPlugin.loaer로 추출함.
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"], // sass-loader로 (scss 파일을 읽고 csss로 변환한다.)
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html", // public/index.html 파일을 읽는다.
      filename: "index.html", // output으로 출력할 파일은 index.html 이다.
    }),
    new NodePolyfillPlugin(),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    new CleanWebpackPlugin(),
  ],
};
