module.exports = {
	map: {
		inline: false,
	},
	plugins: [
		require('postcss-import')({ }),
		require('postcss-url')({ /*url: 'copy', useHash: true */}),
		require('postcss-cssnext')(),
		require('cssnano')({
			autoprefixer: false,
			preset: 'default',
		}),
	]
};
