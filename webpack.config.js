const path = require('path');

module.exports = {
  mode:"development",
  entry: './src/app.ts',
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, 'public/dist'),
    publicPath: "/public/dist"
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node-modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
}