const ExtractTextPlugin = require("extract-text-webpack-plugin")
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
const Autoprefixer = require('autoprefixer');
const config = require('./app/config.js')
const scope = { window: {} }

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
      './app/index.js'
    ]
  },

  output: {
    filename: 'app.js',
    path: __dirname + "/build",
    /* IMPORTANT!
     * You must compile to UMD or CommonJS
     * so it can be required in a Node context: */
    libraryTarget: 'umd'
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
        loader: ExtractTextPlugin.extract(
            'css!postcss!sass?outputStyle=expanded'
        )
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

  postcss: [
      Autoprefixer({ browsers: ['last 3 versions'] })
  ],

  plugins: [
    new ExtractTextPlugin("styles.css"),
    new StaticSiteGeneratorPlugin(
      'app', 
      config.routes, 
      config,
      scope
    )
  ]
}