const HtmlWebpackPlugin = require("html-webpack-plugin")
const config = require('./app/config.js')

module.exports = {
  stats: {
    assets: true,
    colors: true,
    version: false,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    children: false
  },
  
  entry: {
    'app': [
      'webpack-dev-server/client?http://localhost:8080',
      './app/index.js'
    ]
  },

  output: {
    filename: 'app.js',
    path: __dirname + "/build"
  },

  module: {
    loaders: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: [
          'babel?presets[]=react,presets[]=es2015,presets[]=stage-0'
        ]
      },{
        test: /\.scss$/,
        loader: 'style!css!postcss!sass?outputStyle=expanded'
      },
      { test: /\.(jpg|png|gif)$/, loader: 'url?limit=8192' },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,  loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=image/svg+xml" }
    ]
  },

  resolve: {
    extensions: ["", ".js", ".jsx"]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/app/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ]
}
