//JS中的值类型：
//Undefined、Null、Boolean、Number 和String

//值类型和引用类型的区别
//1.引用类型可以动态设置属性和方法
var person=new Object();
person.name="Acuzio";
Object.defineProperty(person,"sex",{configurable:false,enumerable:true,value:"男",writable:false});
console.log(person.name);
console.log(person.sex);
person.sex="女";//该属性是只读的
console.log(person.sex);//男

//值类型不能设置属性和方法
var valPerson="Acuzio";
valPerson.age=27;
console.log(valPerson.age);//undefined


function setName(obj) {
obj.name = "Nicholas";
obj = new Object();//此时obj指向另一个对象，person对象不变
obj.name = "Greg";
}
var person = new Object();
setName(person);
console.log(person.name); //"Nicholas"


//类型检测
//值类型可以使用typeof,对于引用类型它返回object
console.log("---------类型检测---------")
var s = "Nicholas";
var b = true;
var i = 22;
var u;
var n = null;
var o = new Object();
var z=NaN;
console.log(typeof s); //string
console.log(typeof i); //number
console.log(typeof b); //boolean
console.log(typeof u); //undefined
console.log(typeof n); //object
console.log(typeof o); //object
console.log(typeof z);//Number

//instanceof
/*
所有引用类型的值都是Object 的实例。因此，在检测一个引用类型值和Object 构造
函数时，instanceof 操作符始终会返回true。当然，如果使用instanceof 操作符检测基本类型的
值，则该操作符始终会返回false，因为基本类型不是对象。
*/