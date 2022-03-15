const path = require('path');
const Dotenv = require('dotenv-webpack');
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = smp.wrap({
    entry: path.resolve(__dirname, './src/index.jsx'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
    },
    mode: 'development',
    devServer: {
        static:  path.resolve(__dirname, './dist'),
        port: process.env.PORT_DEV || 3777,
        historyApiFallback: true,   // Serves correct HTML5 History path. Avoid 404 when use history (browser's back btn)
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html'),
            favicon: path.resolve(__dirname, './public/favicon.ico'),
        }),
        new Dotenv()
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.html/,
                exclude: /node_modules/,
                use: ['html-loader']
            },
            {
                test: /\.(scss|css)$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(mp4)$/i,
                use: 'file-loader?name=videos/[name].[ext]',
                exclude: /node_modules/
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/i,
                exclude: /node_modules/,
                type: 'asset/resource'
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                exclude: /node_modules/,
                type: 'asset/inline'
            }
        ]
    }
});
