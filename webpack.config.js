// webpack 명령어가 실행되면 디폴트로 스크립트와 같은 경로에 있는 webpack.config.js 내용을 가지고 빌드됨.
import path from "path";
import HtmlWebPackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

export default {
  mode: "development", // 웹팩 빌드 옵션 [ production: 최적화되어 빌드, development: 빠르게 빌드, none: 아무 기능없음 ]
  entry: "./src/index.js", // 이 파일 기준으로 import 되어있는 모든 파일들을 찾아 하나의 파일로 합침.
  output: {
    // 웹팩에서 빌드를 완료하면 output에 명시되어 있는 정보를 통해 빌드 파일을 생성함.
    filename: "bundle.js",
    path: path.join(path.resolve() + "/build"), // __dirname은 ES 모듈에서 없기 때문에 path.resolve로 대체한다.
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
        test: /\.(js|jsx)$/, // 파일을 가져올 정규식
        exclude: "/node_moules/",
        use: ["babel-loader"],
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
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    new CleanWebpackPlugin(),
  ],
};

// Next step : loader 설치 해야함!!!!!!!!!
