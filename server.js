var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

/*
 * This is the configuration file for the webpack development server. If you are
 * working on the React app you will use this for hot reloading.
 *
 * The WebpackDevServer takes a compiler and options:
 *  `new WebpackDevServer(compiler, {})`
 * where compiler = `webpack(<OBJECT_OF_CONFIG_OPTIONS>)` = `webpack(config)`
 */
new WebpackDevServer(webpack(config), {
  /*
   * Dev Server Options
   */

  // Directory to server static assets from
  contentBase: './example',

  // Enable Hot Module Replacement
  hot: true,

  // Set this as true if you are using a pushstate/html5 router.
  historyApiFallback: true,

  /*
   * Dev Server Middleware Options
   */

  // Compiled assets will be served at this path
  publicPath: config.output.publicPath

}).listen(3000, '127.0.0.1', function(err, result) {
  if (err) { return console.warn(err); }

  console.log('Webpack Dev Server listening at localhost:3000');
});
