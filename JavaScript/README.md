## JavaScript

### [输出语句](./01.html)

```js
alert("这是一条js代码！");
document.write("在script标签中调用document的write方法，");
console.log("在控制台中打印本行");    
```

### [JS的书写位置](./02.html)

+ 写到HTML的外部文件中，可以在不同的页面中同时引入，也可以利用浏览器的缓存机制，是推荐使用的方式
    + script标签一旦用于引入外部文件了，就不能再编写代码了
    即使编写，浏览器也会忽略如果需要，则可以再创建一个新的script标签，用于编写内部的js代码
    ```js
    <script type="text/javascript" src="./02.js"></script>
    ```

+ 写到HTML文件中
    + 写到script标签中
        ```js
        <script>
        alert("我是script标签里的代码！")
        </script>
        ```
    + 写到标签的属性中
        ```js
        <button onclick="alert('讨厌，干嘛点我呀')">点击我</button>
        <a href="javascript:alert('让你点你就点呀!');">你也点我一下呗</a>
        <a href="javascript:;">你也点我一下呗</a>
        ```

### [注释](./03.html)

```js
/*
多行注释
*/

// 单行注释
/**
 *  1. JS中严格区分大小写
 *     alert是正确的，但是Alert是错误的 
 *  2. JS中每一条语句以(;)结尾
 *         - 如果不写分号，浏览器会自动添加，但是会消耗一些系统资源
 *         - 有一些时候，浏览器会加错分号
 *         - 所以在开发的过程中，分号必须要写
 *  3. JS会自动忽略多个空格和换行；所以可以利用空格和换行进行格式化
 *  
 */
```
### [变量](./04.html)
```js
var a, b = 4546;
a = 3433454;
```

### [标识符](./05.html)
- 在JS中所有可以由我们自主命名的都可以称为是标识符
- 例如：变量名、函数名、属性名都属于标识符
- 命名标识符时需要遵守的规则：
    - 标识符可以包含字母、数字、_、$
    - 标识符不能以数字开头
    - 标识符不能是ES中的关键字或保留字，如：if、class、var等
    - 标识符一般都使用驼峰命名法
        - 首字母小写，每个单词的开头字母大写，其余字母小写
            helloWorld xxxYyyyZzzz
- JS在底层使用的是Unicode编码
      所以在理论上，所有的utf-8的含有的内容都可以作为标识符
      包括一些中文，但是一般不使用中文作为标识符

### [数据类型](./06.html)

+ 在JS中，一共有六种数据类型
    + [String字符串](./06String.html) 
    + [Number 数值](./07Number.html)
    + [Boolean 布尔值](./08Boolean&Null&Undefined.html)
    + [Null    空值](./08Boolean&Null&Undefined.html)
    + [Undefined 未定义](./08Boolean&Null&Undefined.html)
    + [Object 对象](./06.html)
+ [typeof 变量](./07Number.html)：检查变量的数据类型
+ 强制类型转换 
    + [.toString() & String()](./10强制类型转换_String.html)
    + [Number() & parseInt() & parseFloat()](./11强制类型转换_Number.html)
    + [Boolean()](./13强制类型转换_Boolean.html)
+ [其他进制的数](./12其他进制的数.html)

### [运算符](./14.html)
+ typeof
+ [算术运算符](./14运算符.html)
    + `+`
    + `-`
    + `*`
    + `/`
    + `%`
+ [一元运算符](./15一元运算符.html)
    + `+`
    + `-`   
+ [自增和自减](./16自增和自减.html)
+ [逻辑运算](./17逻辑运算.html)
    + `|`
    + `&&`
    + `||`
    + 对于非Boolean类型，先转换成Boolean类型的值
+ 赋值运算符
    + `=`
    + `+=`
    + `-=`
    + `*=`
    + `/=`
    + `%=`
+ 关系运算符
    + `>`
    + `<` 
    + `>=`
    + `<=` 
    > + 非数字比较先转换成Number，再进行比较；
    > + 任何值和NaN进行比较都是false
    > + 如果符号的两边都是字符串，则不会将字符串转换成Number，而是直接比较Unicode编码。所以在比较字符串类型的值时，一定要转型
    > ```js
    >   console.log("1243243" <  +"2343") // false
    >   console.log("1243243" <  "2343")  // true
    > ```
    > +  `console.log(null == undefined)` $\Rightarrow$ `true`
    + [`==、!=、===、!==`](./18相等运算符.html)
+ 条件运算符
```js
条件表达式?语句1:语句2
true?alert("语句1"):alert('语句2');
var max = a > b ? a : b; // 获取最大值
```
+ 运算符优先级

    + `&&`优先级高于`||`
    + 具体参照JS的优先级表
    + 不确定优先级的情况下，可以使用()来改变优先级
### [Unicode编码](./19Unicode.html)
+ script中：`'\u编码'`
+ html中：`&#编码`

### JS代码块
### 程序控制语句
+ if语句
+ switch语句
+ while语句
+ for语句

### [对象](./24对象.html)
+ 内建对象
    + [数组](./31数组.html)
    + [Date](./33Date.html)
    + [Math](./35Math.html)
    + 包装类
        + Number
        + Boolean
        + String

    
+ 宿主对象
    + DOM: Document Object Model（p96未看）

        1.文档对象模型

        + 文档：表示整个的HTML网页文档
        + 对象：对象表示将网页中的每一个部分转换为一个对象
        + 模型：模型用来表示对象之间的关系，方便我们练习标签

        2.Node节点：构成HTML的最基本单元
        + 文档节点
        + 元素节点
        + 属性节点
        + 文本节点
    + BOM:
+ 自定义对象
    + 对象基本操作
    + 对象字面量

## 函数
+ [作用域](./27作用域.html)
+ [this](./28this.html)
+ [加工工厂&构造函数&原型](./29工厂加工&构造函数&原型.html)
+ [函数调用方法&arguments](./32函数的方法.html)
## 正则表达式

## DOM