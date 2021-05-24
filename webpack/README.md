Webpack的五个概念
+ 入口(entry)

    >入口起点(entry point)指示 webpack 应该使用哪个模块，来作为构建其内部依赖图的开始。进入入口起点后，webpack 会找出有哪些模块和库是入口起点（直接和间接）依赖的。

    webpack.config.js
    ```js
    module.exports = {
    entry: './path/to/my/entry/file.js'
    };
    ```
+ 输出(output)
    
    >output 属性告诉 webpack 在哪里输出它所创建的 bundles，以及如何命名这些文件，默认值为 ./dist。基本上，整个应用程序结构，都会被编译到你指定的输出路径的文件夹中。你可以通过在配置中指定一个 output 字段，来配置这些处理过程：

    webpack.config.js
    ```js
    const path = require('path');

    module.exports = {
    entry: './path/to/my/entry/file.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-first-webpack.bundle.js'
    }
    };
    ```

+ loader

    loader 让 webpack 能够去处理那些非 JavaScript 文件（webpack 自身只理解 JavaScript）
+ 插件(plugins)

    插件可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量。插件接口功能极其强大，可以用来处理各种各样的任务。
+ 模式 Mode

    >通过选择 development 或 production 之中的一个，来设置 mode 参数，你可以启用相应模式下的 webpack 内置的优化
    ```js
    module.exports = {
        mode: 'production'
    };
    ```
## Start

```js
npm init //生成package.json文件
npm i webpack //  package.json中增加一条dependencies项：webpack，
//生成package-lock.json文件，文件中增加一条json数据，name为webpack，记录webpack的依赖包......
npm i webpack webpack-cli -g //下载webpack的脚手架，全局安装
```
+ 新建`webpack.config.js`文件，添加配置，loader写在module的rules里，插件写在plugins里。详见[webpack.config.js](./01Webpack/webpack.config.js)

+ [src](01Webpack/src)里的内容是开发的代码html、css、所需的iamges等内容；
+ [build](01Webpack/build)里的[build.js](01Webpack/build/build.js)是根据`webpack.config.js`指定的入口文件打包形成的js输出文件；
+ [build/index.html](01Webpack/build/index.html)是[src/index.html](01Webpack/src/index.html)被复制然后关联了[build.js]后生成的新的html页面。
+ 原理：在[01Webpack/](01Webpack/)目录，运行`webpack`时，`webpack`会根据`webpack.config.js`配置中定义的入口文件，根据rules指定的loaders解析各种元素，生成build.js。插件`html-webpack-plugin`会复制调用插件函数时指定的html到build文件中，并在复制的文件中引入build.js。