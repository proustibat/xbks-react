// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

const path = require("path");

const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );

const CSSExtract = new ExtractTextPlugin( 'styles.css' );

module.exports = {
  plugins: [
    // your custom plugins
      CSSExtract
  ],
  module: {
    rules: [
      // add your custom rules.
        {
            test: /\.(s*)css$/,
            use: CSSExtract.extract( {
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            } )
        }
    ],
  },
};
//
// const path = require("path");
// const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
//
// module.exports = (baseConfig, env, defaultConfig) => {
//     // Extend defaultConfig as you need.
//
//     const CSSExtract = new ExtractTextPlugin( 'styles.css' );
//
//
//     defaultConfig.module.rules.push({
//           test: /\.(s*)css$/,
//           use: CSSExtract.extract( {
//               use: [{
//                 loader: 'css-loader',
//                     options: {
//                         sourceMap: true
//                     }
//                 }, {
//                     loader: 'sass-loader',
//                     options: {
//                         sourceMap: true
//                     }
//                 }]
//           } )
//     });
//     defaultConfig.resolve.extensions.push( '.css', '.scss' );
//
//     defaultConfig.plugins.push( CSSExtract );
//     // For example, add typescript loader:
//     // defaultConfig.module.rules.push({
//     //     test: /\.(ts|tsx)$/,
//     //     include: path.resolve(__dirname, "../src"),
//     //     loader: require.resolve("ts-loader")
//     // });
//     // defaultConfig.resolve.extensions.push(".ts", ".tsx");
//
//     return defaultConfig;
// };
