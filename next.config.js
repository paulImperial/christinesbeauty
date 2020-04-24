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
