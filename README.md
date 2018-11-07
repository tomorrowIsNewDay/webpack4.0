###  基于webpack4.0版本构建vue开发环境
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
      
      {
          test: /\.css$/,
          loader: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
    参考文章：https://juejin.im/post/5bc30d5fe51d450ea1328877#heading-14
