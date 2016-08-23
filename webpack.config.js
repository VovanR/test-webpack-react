/* eslint quote-props: ["error", "as-needed"] */
/* eslint camelcase: ["error", {properties: "never"}] */

const path = require('path');

const PATH_SRC = path.join(__dirname, 'src');
const PATH_DIST = path.join(__dirname, 'dist');

module.exports = {
	entry: {
		app: path.resolve(PATH_SRC, 'js/app.jsx')
	},
	output: {
		path: PATH_DIST,
		filename: '[name].js'
	},
	module: {
		preLoaders: [
			{
				test: /\.(js|jsx)$/,
				loader: 'eslint-loader',
				exclude: [/node_modules/]
			}
		],
		loaders: [
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			}
		]
	},
	eslint: {
		configFile: path.join(__dirname, '.eslintrc')
	},
	devtool: 'cheap-module-source-map',
	plugins: [],
	externals: {
		react: 'React',
		'react-dom': 'ReactDOM'
	},
	resolve: {
		extensions: ['', '.js', '.jsx', '.css'],
		modulesDirectories: ['node_modules'],
		alias: {
			components: path.resolve(PATH_SRC, 'js/components'),
			styles: path.resolve(PATH_SRC, 'styles'),
			node_modules: path.join(__dirname, 'node_modules')
		},
		root: [PATH_SRC]
	}
};
