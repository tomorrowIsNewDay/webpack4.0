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
    
    ##### CopyWebpackPlugin: 拷贝文件插件，项目中有一些运用到了jquery或者其他的插件，在走webpack打包时会出现意外报错的情况，这时就需要将这部分文件排除在webpack打包之外，CopyWebpackPlugin就可以在打包时将制定的文件夹精细直接拷贝以绕过打包流程
    ```
    new CopyWebpackPlugin ([{
        from: path.resolve(__dirname, '../static'), //拷贝来源
        to: config.build.assetsSubDirectory,
        ignore: ['.*']
    }])
    ```
