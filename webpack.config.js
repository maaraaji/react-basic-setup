//It needs webpack
var webpack = require('webpack');
//Importing path - a global javascript library to resolve the application's absolute path
var path = require('path');
//The distribution directory to push the transpiled and bundled files. This is the directory from which you will server your app.
var DIST_DIR = path.resolve(__dirname, 'dist');
//The Source folder to intimate webpack where to find the original source codes
var SRC_DIR = path.resolve(__dirname, 'src');
//The webpack configuration which is actually an javascript object.
var config = {
  //The entry file where the webpack needs to start with and understand the dependencies
  entry: SRC_DIR + '/app/index.js',
  //The output configuration where to output the file
  output: {
    path: DIST_DIR + '/app',
    filename: 'bundle.js',
    publicPath: '/app/'
  },
  //Define the modules that needs to be used during the webpack process of bundling
  module: {
    //loaders are renamed to rules in webpack v 4.1.0. rules are array of objects to use during webpack process (eg. babel-loader for transpiling es6 to es5)
    rules: [
      {
        //test tells webpack which files to look at
        test: /\.js?/,
        //include key to tell webpack which folders to be scanned the test files
        include: SRC_DIR,
        //which loader to use
        loader: 'babel-loader',
        //query key is a JS Object that tells presets to work
        query: {
          //presets are array
          presets: ['react', 'es2015', 'stage-2']
        }
      }
    ]
  }
}
//export the config as module
module.exports = config;