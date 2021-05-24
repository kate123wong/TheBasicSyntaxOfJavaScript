/**
 * webpack.config.js是webpack的配置文件
 * 当运行`webpack`的指令时，会加载里面的配置文件
 * 
 * 所有的构建工具都是基于nodejs平台运行的，模块化一般采用commonjs
 */

/**
 * laoder：1.下载；2.使用
 * plugins: 1.下载；2.引入 3. 使用
 *  html插件：npm i html-webpack-plugin -D
 */
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output:{
        filename: 'build.js',
        path:resolve(__dirname,'build')
    },
    module:{
        rules:[
            //详细的loader配置
            { test: /\.css$/, use: ['style-loader','css-loader']},
            { test: /\.ts$/, use: 'ts-loader' }
        ]
    },
    plugins:[
        //html-webpack-plugin
        //功能：插件会创建一个空的HTML文件，引入打包输出的所有资源（JS/CSS）
        // 需求：需要有结构的HTML文件
        new HtmlWebpackPlugin({
            //复制'./src/index.html'文件，并自动引入打包输出的文件
            template:'./src/index.html'
        })
    ],
    mode:'development',
    // mode:'production'
}