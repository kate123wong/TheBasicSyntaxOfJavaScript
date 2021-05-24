(function () {
    // 输出姓名
    // 当指定person是Iperson类型的时候，我们在写person的属性的时候，ts会给予提示
    function showFullName(person) {
        return person.firstName + '_' + person.lastName;
    }
    var person = {
        firstName: '东方',
        lastName: '不败'
    };
    console.log(showFullName(person));
})();
