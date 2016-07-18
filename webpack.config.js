var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var path = require('path');

var host = '127.0.0.1';
var port = '9000';

var config  = {
    entry: './examples/example-es6/src',
    devtool: 'source-map',
    output: {
        path: __dirname + '/examples/example-es6/build',
        filename: 'app.js',
        publicPath: __dirname + '/examples/example-es6'
    },
    module: {
        loaders: [
            {
        test: /(\.jsx|\.js)$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['react', 'es2015']
        }
      },
            { test: /\.scss$/, loaders: ['style', 'css', 'sass'] }
        ]
    }
};


new WebpackDevServer(webpack(config), {
  contentBase: './examples/example-es6',
  hot: true,
  debug: true
}).listen(port, host, function (err, result) {
  if (err) {
    console.log(err);
  }
});
console.log('-------------------------');
console.log('Local web server runs at http://' + host + ':' + port);
console.log('-------------------------');

module.exports = config;
