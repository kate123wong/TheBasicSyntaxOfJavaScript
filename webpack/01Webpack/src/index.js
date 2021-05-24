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
import data from './data.json'
import './index.css'

console.log(data);

function add(a, b) { 
    return a + b;
 }
 console.log(add(1,2));