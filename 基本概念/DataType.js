//ECMAScript定义6种数据类型：
/*
类型				值
Undefined		undefined
Null			null
Boolean			true/false
Number			双精度浮点数
String			字符串
Object			对象
*/

//typeof用于判定数据类型，可能的值
/*
undefined
boolean
string
object
function
*/
console.log(typeof "string");
console.log(typeof 100);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof true);


//Undefined类型--使用var声明变量但没有初始化时值为undefined
var undefStr;
console.log(undefStr===undefined);
//console.log(age);//产生错误，因为age没有声明
console.log(typeof age);//


//Null类型--
/*
从逻辑角度来看，null 值表示一个空对象指针，而这也正是使用typeof 操作符检测null 值时会返回"object"的原因
，undefined 值是派生自null 值的，因此ECMA-262 规定对它们的相等性测试要返回true
*/
console.log(null==undefined);//true

//Boolean类型：值true/false 区分大小写
/*
ECMAScript 中所有类型的值都有与这两个Boolean 值
等价的值。要将一个值转换为其对应的Boolean 值，可以调用转型函数Boolean()
转换规则
类型				true				false
String			任何非空字符串			""(空字符串)
Number			非0数值				0和NaN
Object			任何对象			   null
Undefined		N/A					  undefined
*/
console.log('非空字符'+Boolean("123"));//true
console.log("空字符"+Boolean(""));//false
console.log("非0数值"+Boolean(1));//true
console.log("0:"+Boolean(0));//falase
console.log("Nan:"+Boolean(NaN));//false
console.log("对象:"+Boolean({adsas:123}));//true
console.log("Undefined:"+Boolean(undefined));//false

//Number类型:双精度浮点数

var intNum=10;
var octNum=070;//八进制，第一位是0，表示十进制的56
var hexNum=0xA;//十六进制，前两位是0x，后面是十六进制数字
var eNum=3.125e7;//科学计数法：31250000

//在进行算术计算时，所有以八进制和十六进制表示的数值最终都将被转换成十进制数值。

console.log(Number.MAX_VALUE);//Number的最大值
console.log(Number.MIN_VALUE);//Number的最小值
console.log(Number.NaN);
console.log(isFinite(Number.MAX_VALUE*2));//isFinite:判断数值是否在Number范围内

//NaN：即非数值（Not a Number）是一个特殊的数值，这个数值用于表示一个本来要返回数值的操作数未返回数值的情况
/*
任何涉及NaN 的操作（例如NaN/10）都会返回NaN
，NaN 与任何值都不相等，包括NaN 本身
*/
console.log("---------------")
console.log(1/0);			  //正数除以0 返回Infinity
console.log(-1/0);			  //负数除以0 返回-Infinity
console.log(typeof Infinity);//Number
console.log(typeof -Infinity);//Number
console.log(Infinity==Infinity);//true
console.log(Number.MAX_VALUE*2==Infinity);//true
console.log(Number.MIN_VALUE*2==-Infinity);//false
console.log(0/0);//NaN
console.log(NaN+1);//NaN
console.log(NaN==NaN);//false
console.log("isNaN:"+isNaN(0/0));//true

//Number()、parseInt()和parseFloat()
//Number()
/*
转换规则
Boolean：true：1；false：0
数值：直接返回
null:0
undefined:NaN
字符串的规则：
1.只有数字(整数，浮点数)：直接转换；忽略八进制的前导0
2.有效的十六进制：转换为对应的十进制
3.空字符串：0
4.不满足上述格式：NaN
转为0的：null,"",false
对象：
调用valueOf()然后按照前面规则转换，如果返回NaN则调用toString再按前面规则转换
*/
console.log("----Number转各种类型-----")
console.log("Boolean true:"+Number(true));//1
console.log("Boolean false:"+Number(false));//0
console.log("null:"+Number(null));//0
console.log("undefined:"+Number(undefined));//NaN
console.log("123:"+Number("123"));//123
console.log("ASD123:"+Number("ASD123"));//NaN
console.log("0XAF:",Number("0XAF"));//175
console.log("'':"+Number(""));//0
console.log("3.12e7:"+Number("3.12e7"));//31200000
console.log("{}:"+Number({}));//NaN

//paseInt(obj,[radix])
/*
radix:指定进制：8，10，16
它会忽略字符串前面的空格，直至找到第一个非空格字符。如果第一个字符不是数字字符或者负号，parseInt()
就会返回NaN；也就是说，用parseInt()转换空字符串会返回NaN（Number()对空字符返回0）。如
果第一个字符是数字字符，parseInt()会继续解析第二个字符，直到解析完所有后续字符或者遇到了
一个非数字字符
*/
console.log("------parseInt()------");
console.log("123A:"+parseInt("123A"));//123
console.log("'':"+parseInt(""));//NaN
console.log("0xA:"+parseInt("0xA",16));//10
console.log("070:"+parseInt("070",8));//56
console.log("0xA:"+parseInt("0xA"));//10
console.log("070:"+parseInt("070"));//70
console.log("3.12e7:"+parseInt("3.12e7"));//3

//parseFloat()
/*
parseFloat()只解析十进制值
parseFloat()与parseInt()的第二个区别在于它始终都会忽略前导的零
与parseInt()函数类似，parseFloat()也是从第一个字符（位置0）开始解析每个字符。而且
也是一直解析到字符串末尾，或者解析到遇见一个无效的浮点数字字符为止。也就是说，字符串中的第
一个小数点是有效的，而第二个小数点就是无效的了，因此它后面的字符串将被忽略
十六进制格式的字符串则始终会被转换成0
*/
console.log("-----parseFloat-------")
console.log("0xa:"+parseFloat("0xa"));//0
console.log("22.33.33:"+parseFloat("22.33.33"));//22.33
console.log("070:"+parseFloat("070"));//70
console.log("3.12e7:"+parseFloat("3.12e7"));//3120000
console.log("123ABC:"+parseFloat("123ABC"));//123
console.log("ABC123:"+parseFloat("ABC123"));//NaN
console.log("3.12e7:"+parseFloat("3.12e7"));//31200000


//String类型：String 类型用于表示由零或多个16 位Unicode 字符(UTF16?)组成的字符序列，即字符串。
/*
字面量				 含义
\n 					换行
\t 					制表
\b 					空格
\r 					回车
\f 					进纸
\\ 					斜杠
\' 					单引号（'），在用单引号表示的字符串中使用。例如：'He said, \'hey.\''
\" 					双引号（"），在用双引号表示的字符串中使用。例如："He said, \"hey.\""
\xnn 				以十六进制代码nn表示的一个字符（其中n为0～F）。例如，\x41表示"A"
\unnnn 				以十六进制代码nnnn表示的一个Unicode字符（其中n为0～F）。例如，\u03a3表示希腊字符Σ

ECMAScript 中的字符串是不可变的，也就是说，字符串一旦创建，它们的值就不能改变。
要改变某个变量保存的字符串，首先要销毁原来的字符串，然后再用另一个包含新值的字符串填充该变量.
*/
console.log("------String--------")
var text="T\u03a3.\n\t\b\'\"";
console.log(text.length);//8
var strCode="今天天气不错ABC";
console.log(strCode.length);//9

//toString([radix])字符串转换
/*
要把一个值转换为一个字符串有两种方式。第一种是使用几乎每个值都有的toString()方法
数值、布尔值、对象和字符串值（没错，每个字符串也都有一个toString()方法，该方法返回字
符串的一个副本）都有toString()方法。但null 和undefined 值没有这个方法

radix:进制：2/8/16，次参数只对数字有效
*/
var age=11;
console.log(age.toString(16));//b
console.log(age.toString(2));//1011
console.log(age.toString(8));//13
var found=true;
console.log(found.toString());//true
console.log(found.toString(16));//true
var strToS="11";
console.log(strToS.toString());//11
console.log(strToS.toString(2));//11

//String(value)
/*
在不知道要转换的值是不是null 或undefined 的情况下，还可以使用转型函数String()，这个
函数能够将任何类型的值转换为字符串
规则:
如果值有toString()方法，则调用该方法（没有参数）并返回相应的结果；
 如果值是null，则返回"null"；
 如果值是undefined，则返回"undefined"。
*/
console.log("-----String(value)------");
console.log(String(10));//10
console.log(String(true));//true
console.log(String(null));//null
console.log(String(undefined));//undefined

var xxxxx=123;
console.log(xxxxx.constructor);


//Object类型
/*
ECMAScript 中的对象其实就是一组数据和功能的集合。
在ECMAScript 中，Object 类型是所有它的实例的基础。换句话说，
Object 类型所具有的任何属性和方法也同样存在于更具体的对象中。
Object都具有的属性和方法
于在ECMAScript 中Object 是所有对象的基础，因此所有对象都具有这些基本的属性和方法。
*/
console.log('------Object-------')
//constructor:保存着用于创建当前对象的函数。
var strObj="123";
console.log("constructor:"+strObj.constructor);
//hasOwnProperty(propertyName):用于检查给定的属性在当前对象实例中（而不是在实例的原型中）是否存在。
console.log("hasOwnProperty(length):"+strObj.hasOwnProperty("length"));//true
//isPrototypeOf(object):用于检查传入的对象是否是传入对象的原型
console.log("isPrototypeOf:"+Object.isPrototypeOf(strObj));//false
//propertyIsEnumerable(propertyName):用于检查给定的属性是否能够使用for-in 语句来枚举。
console.log("propertyIsEnumerable:"+strObj.propertyIsEnumerable("length"));//false
//toLocaleString()：返回对象的字符串表示，该字符串与执行环境的地区对应。
console.log("toLocaleString:"+strObj.toLocaleString());//123
//toString()：返回对象的字符串表示。
console.log("toString:"+strObj.toString());//123
//valueOf()：返回对象的字符串、数值或布尔值表示。
console.log("valueOf:"+strObj.valueOf());//123

