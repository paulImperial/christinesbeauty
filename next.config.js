// const withPlugins = require('next-compose-plugins');
// const optimizedImages = require('next-optimized-images');
// require('dotenv').config();
// const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');

// module.exports = {
//   plugins: [new ImageminWebpWebpackPlugin()],
// };

// module.exports = {
//   env: {
//     GOOGLE_API: 'AIzaSyAB3MMqT3qque02waQxy0VjA7d5iqxIxN0',
//   },
// };

// module.exports = {
// 	poweredByHeader: false,
// };

// module.exports = {
//   compress: false,
// }

module.exports = {
  env: {
    GOOGLE_API: 'AIzaSyAB3MMqT3qque02waQxy0VjA7d5iqxIxN0',
  },
  poweredByHeader: false,
  swcMinify: true,
  compress: false,

  async exportPathMap(defaultPathMap) {
    return {
      ...defaultPathMap,
    };
  },
}

// module.exports = {
//   webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
//     // Add the new plugin to the existing webpack plugins
//     config.plugins.push(new Dotenv({ silent: false }));

//     return config;
//   },
// };

// module.exports = withPlugins([
//   [
//     optimizedImages,
//     {
//       imagesFolder: 'images',
//       imagesName: '[name]-[hash].[ext]',
//       handleImages: ['jpeg', 'png', 'svg'],
//       optimizeImages: true,
//       optimizeImagesInDev: true,
//     },
//   ],
// ]);

// const withImages = require('next-images');
// module.exports = withImages();

// module.exports = {
//   webpack: (configuration) => {
//     configuration.module.rules.push(
//       {
//         test: /\.md$/,
//         use: 'frontmatter-markdown-loader',
//       },
//       { test: /\.(png|jpe?g|gif)$/i, use: 'file-loader' }
//     );
//     return configuration;
//   },
//   async exportPathMap(defaultPathMap) {
//     return {
//       ...defaultPathMap,
//     };
//   },
// };
