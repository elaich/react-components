module.exports = {
	mode: 'production',
	devtool: 'source-map',
	entry: {
		main: {
			import: './src/Component.tsx',
			library: {
				name: 'vivian-iq',
				type: 'umd'
			}
		}
	},
	module: {
		rules: [
			{
				test: /\.tsx$/,
				use: 'ts-loader',
				exclude: /node_modules/
			}
		]
	}
}
