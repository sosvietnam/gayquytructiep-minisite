const path = require('path');

console.log('public/', path.resolve('./public/'));

module.exports = {
	map: {
		inline: false,
	},
	plugins: [
		require('postcss-import')({ }),
		require('postcss-url')({
			basePath: './public/',
			url: 'rebase',
		}),
		require('postcss-cssnext')(),
		require('cssnano')({
			autoprefixer: false,
			preset: 'default',
		}),
	]
};
