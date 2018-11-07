const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path')
const baseConfig = require('./webpack.base.conf')
module.exports = merge(baseConfig, {
    mode: 'production',
    devtool: 'source-map',
    module: {
        rules: []
    },
    plugins: [
        // 每次打包前，会清除之前的文件，生成带有hash值的文件
        new CleanWebpackPlugin(['dist/'], {
            root: path.resolve(__dirname, '../'),
            verbose: true,
            dry: false
        })
    ]
})