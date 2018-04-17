const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        main: "./src/index.tsx",
    },
    output: {
        filename: "[name].bundle.js",
        path: __dirname + "/dist"
    },
    mode: 'development',
    devtool: "source-map",
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader", include: __dirname + '/src'},
            { test: /\.js$/, enforce: "pre", loader: "source-map-loader" }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 9000
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.template.ejs',
            inject: 'body',
            hash: true,
            }),
    ]
};