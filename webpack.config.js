let path = require('path');
let webpack = require('webpack');


module.exports = {
  entry: ['whatwg-fetch', path.resolve(__dirname, 'src/index.js')],
  output: {
	path: path.resolve(__dirname, './dist'),
	filename: 'build.js',
	publicPath: '/dist'
  },
  devtool: 'source-map',
  module: {
	rules: [
	  {
		test: /\.vue$/,
		loader: 'vue-loader',
		options: {
		  loaders: {
			'scss': 'vue-style-loader!css-loader!sass-loader',
		  }
		}
	  },
	  {
		test: /\.js$/,
		exclude: /node_modules/,
		loader: "babel-loader"
	  },
	  {
		test: /\.scss$/,
		use: [{
		  loader: "style-loader" // creates style nodes from JS strings
		}, {
		  loader: "css-loader" // translates CSS into CommonJS
		}, {
		  loader: "sass-loader" // compiles Sass to CSS
		}]
	  },
	  {
		test: /\.css$/,
		use: [{
		  loader: "style-loader" // creates style nodes from JS strings
		}, {
		  loader: "css-loader" // translates CSS into CommonJS
		}]
	  }

	]
  },
  resolve: {
	alias: {
	  'vue$': 'vue/dist/vue.esm.js'
	}
  }
};