const path = require('path');
module.exports = env => {
	return {
		entry: './src/index.js',
		output: {
			path: path.resolve(__dirname, 'build/i/star/'),
			filename: env === "dev" ? 'star.js': "star-min.js"
		},
		module: {
			loaders: [
				{
					loader: 'babel-loader',
					test: /\.js$/,
					exclude: /node_modules/,
					query: {
						presets: ['es2015']
					}
				}
			]
		},
		devServer: {
			port: 786,
			contentBase: './build',
			inline: true
		}
    }
}