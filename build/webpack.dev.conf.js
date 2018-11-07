const merge = require('webpack-merge')
const path = require('path')
const webpack = require('webpack')
const baseConfig = require('./webpack.base.conf')
module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        open: true,
        port:'8383',//监听端口
        //inline:true,//设置为true，当源文件改变的时候会自动刷新
        //historyApiFallback:true,//在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        hot:true//允许热加载
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
})