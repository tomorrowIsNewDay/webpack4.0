const webpack = require('webpack')
const config = require('./webpack.prod.conf')

webpack(config, function(err, stats){
    if(err || stats.hasErrors()) {
        console.log(err)
        return
    }

    //处理完成
    console.log(stats.toString({
        chunks: false,
        colors: true
    }))
})