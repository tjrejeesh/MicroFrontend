const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "myapp",
    projectName: "platform",
    webpackConfigEnv,
  });

  return webpackMerge.smart(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
      module: {
          rules: [
              {
                  test: /\.js$/,
                  loader: 'babel-loader',
              }, {
                  // This plugin will allow us to use AngularJS HTML templates
                  test: /\.html$/,
                  exclude: /node_modules/,
                  loader: 'html-loader',
              },
              {
                  test: /\.scss$/,
                  use: [
                      // style-loader
                      {loader: 'style-loader'},
                      // css-loader
                      {
                          loader: 'css-loader',
                          /*options: {
                              modules: true
                          }*/
                      },
                      // sass-loader
                      {loader: 'sass-loader'}
                  ]
              },
              {
                  test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                  loader: 'url-loader?limit=100000'
              }
          ],
      },
      node: {
          fs: 'empty'
      },
      devtool: 'source-map',
      externals: [],
      devServer: {
          historyApiFallback: true
      }
  });
};
