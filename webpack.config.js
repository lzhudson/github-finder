const path = require('path');
/** @type {import('webpack').Configuration} */

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'js', 'app.js'),
    ui: path.resolve(__dirname, 'js', 'ui.js'),
    github: path.resolve(__dirname, 'js', 'github.js') 
  },
  output: {
    path: path.resolve(__dirname, 'bunlded'),
    filename: '[name].js'
  },
  devServer: {
    contentBase: path.join(__dirname, './'),
    compress: false,
    port: 9000
  }
}