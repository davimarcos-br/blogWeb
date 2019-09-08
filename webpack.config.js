const HtmlWebPackPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html'
})

module.exports = {
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.jsx', '.js'],
  },

  plugins: [htmlPlugin]
}