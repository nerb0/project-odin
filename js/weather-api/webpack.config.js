const Dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "inline-source-map",
  entry: {
    index: "./src/index.ts",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "TOP: Weather",
      templateContent: ({ htmlWebpackPlugin }) => `<html>
	<head>
		<title>${htmlWebpackPlugin.options.title}</title>
		${htmlWebpackPlugin.tags.headTags}
	</head>
	<body>
		<div id="root"></div>
		${htmlWebpackPlugin.tags.bodyTags}
	</body>
</html>`,
    }),
    new Dotenv(),
  ],
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "src"),
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  devServer: {
    compress: true,
    port: 8080,
    static: "./dist",
  },
  optimization: {
    runtimeChunk: "single",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".svg"],
  },
};
