var webpack = require('webpack');
var path = require('path');

// assign dir path of bundle file output to var
var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
// assign dir path of the React app's codebase to var
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  // specify the file the bundling process uses when it starts	
  entry: APP_DIR + '/index.jsx',
  // tell Webpack what to do when bundling process complete. Here tells it to use src/client/public dir to output the bundled file with name bundle.js
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
    module: {
      loaders: [
        {
          test : /\.jsx?/,
  	  include: APP_DIR,
	  loader : 'babel'
        }
      ]
    }
  }
  
  
  }
};

module.exports = config;
