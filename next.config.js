const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
	[optimizedImages, {
		imagesFolder: 'images',
		imagesName: '[name]-[hash].[ext]',
		handleImages: ['jpeg', 'png', 'svg'],
		optimizeImages: true,
		optimizeImagesInDev: true,
	}],
  
  ]);

module.exports = {
	webpack: configuration => {
	  configuration.module.rules.push({
		test: /\.md$/,
		use: 'frontmatter-markdown-loader'},
		{test: /\.(png|jpe?g|gif)$/i,
		use: 'file-loader'},
	  );
	  return configuration;
	},
	async exportPathMap(defaultPathMap) {
	  return {
		...defaultPathMap,
	  };
	},
  };
