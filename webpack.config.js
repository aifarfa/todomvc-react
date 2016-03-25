const path = require('path');

module.exports = {
	entry: './index.js',

	output: {
		path: path.resolve("./js"),
		filename: 'bundle.js',
		publicPath: '/js/'
	},

	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader?presets[]=react'
		}]
	}
}
