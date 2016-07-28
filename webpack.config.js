var path = require('path');

module.exports = {
  entry: path.join(__dirname, 'example', 'app', 'index.js'),

  output: {
    path: path.join(__dirname, 'example', 'build'),
    publicPath: '/build/', // webpack-dev-server filepath for in-memory bundle to be served from
    filename: 'bundle.js'
  },

  // Mount CSS and JS Modules
  module: {
    loaders: [
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
