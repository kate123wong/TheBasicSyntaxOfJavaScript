/**
 * 此文件为webpack的入口文件
 * 1.运行指令：
 *      - 开发环境
 *      webpack ./src/index.js -o build/build.js --mode=development
 *      - 生产环境:是被压缩的可运行的代码
 *      webpack ./src/index.js -o build/build.js --mode=production
 * 2. webpack可以处理json文件和js文件，不能处理css/img等其他资源
 * 3. 生产环境比开发环境多了一个压缩化的js代码
 */


// 在js中引入所有需要再html页面中用到的外部文件，包括：css文件、json文件、字体等等
// 该js经过webpack打包之后，所有引入的文件将会被打包在一起，供新生成的html文件使用
import data from './data.json'
import './index.css'

console.log(data);

function add(a, b) { 
    return a + b;
 }
 console.log(add(1,2));