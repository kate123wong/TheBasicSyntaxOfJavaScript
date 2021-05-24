//ts中书写js中的类，演示效果
(()=>{
    //定义一个接口
    interface Iperson{
        firstName:string
        lastName:string
    }
    //定义一个类
    class Person{
        // 定义公共字段的属性 
        firstName:string // 姓氏
        lastName:string  // 姓名
        fullName:string
        constructor(firstName:string, lastName:string){
            //更新属性数据
            this.firstName = firstName;
            this.lastName = lastName;
            this.fullName = this.firstName + '_' + this.lastName
        }
    }
    function showFullName(person:Person){
        return person.fullName
    }
    //实例化对象
    const person = new Person('诸葛','孔明');
    console.log(showFullName(person))
})()