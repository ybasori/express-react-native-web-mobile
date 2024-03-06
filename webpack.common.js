const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  entry: {
    app: {
      import: "./index-web.js",
    },
  },
  resolve: {
    extensions: [
      ".web.tsx",
      ".tsx",
      ".web.ts",
      ".ts",
      ".web.jsx",
      ".jsx",
      ".web.js",
      ".js",
      ".css",
      ".json",
    ],
    plugins: [new TsconfigPathsPlugin()],
    alias: {
      "react-native$": "react-native-web",
    },
  },
  output: {
    clean: true,
    path: path.resolve(__dirname, "public/assets/js"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: [path.resolve("node_modules")],
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
      {
        test: /\.(scss|sass|css)$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[hash][ext][query]",
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[hash][ext][query]",
        },
      },
    ],
  },
  optimization: {
    runtimeChunk: "single",
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   title: "Output Management",
    // }),
  ],
};
