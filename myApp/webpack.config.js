const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (webpackConfigEnv) => {
    const defaultConfig = singleSpaDefaults({
        orgName: "myapp",
        projectName: "root-config",
        webpackConfigEnv,
    });

    return webpackMerge.smart(defaultConfig, {
        // modify the webpack config however you'd like to by adding to this object
        module: {
            rules: [
                {
                    // Webpack style loader added so we can use materialize
                    test: /\.scss/,
                    use: ['style-loader', 'sass-loader']
                },{
                    // This plugin will allow us to use AngularJS HTML templates
                    test: /\.html$/,
                    exclude: /node_modules/,
                    loader: 'html-loader',
                },
            ],
        },
        devServer: {
            historyApiFallback: true,
        },
        plugins: [
            new HtmlWebpackPlugin({
                inject: false,
                template: "src/index.ejs",
                templateParameters: {
                    isLocal: webpackConfigEnv && webpackConfigEnv.isLocal === "true",
                },
            }),
        ],
    });
};
