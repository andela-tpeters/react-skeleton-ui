var path = require('path');

var webpack = require('webpack');
var precss = require('precss');
var cssnext = require('postcss-cssnext');
var csswring = require('csswring');
var mqpacker = require('css-mqpacker');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// ========================================================
// Env Conditionals
// ========================================================

var cssLoader, entry;
var env = process.env.NODE_ENV || 'development';

/*
 * Handle Configuration Differences Between Production Build and Development Workflow
 *
 * If NODE_ENV is specified as production, webpack will build accordingly and the rest of the
 * time if 'development is not passed we will assume that we are in development mode.
 *
 * 1. use extract text plugin for prod build and inline styles for hot module reload in dev
 * 2. use only app entry point for prod build and include webpack-dev-server entries in dev
 */
if (env === 'development') {
  cssLoader = 'style!css!postcss'; // Inline styles for dev for hot replacement;
  entry = [
    'webpack-dev-server/client?http://localhost:3000', // webpack-dev-server
    'webpack/hot/only-dev-server', // webpack-dev-server
    './example/app/index' // app entry point
  ];
} else {
  // ExtractTextPlugin will move styles imported from js into a stylesheet, use this in production
  // so we don't have inline styles
  cssLoader = ExtractTextPlugin.extract('style', 'css!postcss');
  entry = [ './example/app/index' ];
}

// ========================================================
// Webpack Configuration
// ========================================================

module.exports = {
  entry: entry,

  output: {
    path: path.join(__dirname, 'example', 'build'),
    publicPath: '/build/', // webpack-dev-server filepath for in-memory bundle to be served from
    filename: 'bundle.js'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(), // React hot module plugin
    new webpack.NoErrorsPlugin(), // Handle errors gracefully when using hot module plugin
    new ExtractTextPlugin('styles.css'), // Specify stylesheet to extract styles into
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') } // Make React super svelte
    })
  ],

  // PostCSS config: nested style rules, autoprefixed vendor rules and minify with source maps
  postcss: function() {
    return [precss, cssnext, mqpacker, csswring];
  },

  // Mount CSS and JS Modules
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: cssLoader
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader : 'babel',
        query: {
          presets: ['es2015', 'stage-0', 'react']
        },
        include: [path.join(__dirname, 'example'), path.join(__dirname, 'src')]
      }
    ]
  }
};
