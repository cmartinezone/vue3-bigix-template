const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  filenameHashing: false,
  chainWebpack: (config) => {
    config.optimization.delete('splitChunks');
    // config.plugins.delete('html');
    config.plugins.delete('preload');
    config.plugins.delete('prefetch');
  },
});

// vue.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
module.exports = {
  css: {
    extract: false,
  },
  configureWebpack: {
    optimization: {
      splitChunks: false, // makes there only be 1 js file - leftover from earlier attempts but doesn't hurt
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'output.html', // the output file name that will be created
        template: 'src/output-template.html', // this is important - a template file to use for insertion
        inlineSource: '.(js|css)$', // embed all javascript and css inline
      }),
      new HtmlWebpackInlineSourcePlugin(HtmlWebpackPlugin),
    ],
  },
};
