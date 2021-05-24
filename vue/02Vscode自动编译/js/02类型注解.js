// 类型注解：一种轻量级的为函数或者变量添加的约束
(function () {
    function showMsg(str) {
        return '窗前明月光，' + str;
    }
    var msg = '疑是地上霜';
    // let msg = [12,434,2]
    console.log(showMsg(msg));
})();
// ts是强制类型的，所以str要求是string，但是传入参数是数组，会有一些问题。
// TypeScript提供了静态的代码分析，
//  它可以分析代码结构和提供的类型注解。
