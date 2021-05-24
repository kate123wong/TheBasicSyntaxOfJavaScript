+ 前修：HTML + CSS + JavaScript + AJAX

在线笔记：https://24kcs.github.io/vue3_study/chapter1/01_%E5%88%9D%E8%AF%86TS.html#typescript-%E7%9A%84%E4%BB%8B%E7%BB%8D

## TS
+ TypeScript包含JavaScript，但是TS需要用TS编译器编辑，才能在浏览器中运行
### 安装
```
npm install -g typescript
tsc -V
```
### 手动编译代码
+ 使用`tsc ./01TS实践.ts` 编译得到`./01TS实践.js`,然后可以直接在HTML
文件中使用js文件。
+ ts文件编译为js后，是没有ts语法的。
    例如：`let`编译为`var`、形参类型会被删除等

### vscode自动编译

+ 在`02Vscode自动编译`空文件夹下，使用`tsc --init`来生成`tsconfig.json`配置文件
+ 修改配置文件
    > "outDir": "./js", 
    > "strict": false,   
+ 启动监视任务:终端 -> 运行任务 -> 监视tsconfig.json 

### 类型注解
+ TypeScript提供了静态的代码分析，它可以分析代码结构和提供的类型注解。
+ 要注意的是尽管有错误，但对应的 js 文件还是被创建了。 就算代码里有错误，仍然可以使用 TypeScript。但在这种情况下，TypeScript 会警告代码可能不会按预期执行。
#接口

### webpack

## Vue3
