//ts中书写js中的类，演示效果
(function () {
    //定义一个类
    var Person = /** @class */ (function () {
        function Person(firstName, lastName) {
            //更新属性数据
            this.firstName = firstName;
            this.lastName = lastName;
            this.fullName = this.firstName + '_' + this.lastName;
        }
        return Person;
    }());
    function showFullName(person) {
        return person.fullName;
    }
    //实例化对象
    var person = new Person('诸葛', '孔明');
    console.log(showFullName(person));
})();
