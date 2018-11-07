const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const AutoDllWebpackPlugin = require('autodll-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: {
        bundle: path.resolve(__dirname, '../src/index')
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[hash].js'
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve(__dirname, '../src')
        },
        extensions: ['*', ".js", ".json",".vue"]
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                loader: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../index.html')
        }),
        new VueLoaderPlugin(),
        // 第三方库单独打包
        new AutoDllWebpackPlugin({
            inject: true, // 自动把打包出来的第三方库文件插入到HTML
            debug: true,
            filename: '[name]_[hash].js',//打包后的文件名字
            path: './dll', //打包后路径
            entry: {
                vendor: ['vue']
            }
        }),
        //提取共同代码 自带的  之前版本是 commonsChunksWebpackPlugin
        new webpack.optimize.SplitChunksPlugin(),
        // 抽取css到单文件（一个文件）
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]

}