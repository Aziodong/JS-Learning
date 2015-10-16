//for-in
//for (property in expression) statement
/*
for (var propName in window) {
document.write(propName);
}
*/

//label语句
//label:statement
/*
start: for (var i=0; i < count; i++) {
alert(i);
}
*/

//with语句
/*
with 语句的作用是将代码的作用域设置到一个特定的对象中。with 语句的语法如下：
with (expression) statement

var qs = location.search.substring(1);
var hostName = location.hostname;
var url = location.href;
上面几行代码都包含location 对象。如果使用with 语句，可以把上面的代码改写成如下所示：
with(location){
var qs = search.substring(1);
var hostName = hostname;
var url = href;
}
*/

//switch语句
/*
switch (expression) {
case value: statement
break;
case value: statement
break;
case value: statement
break;
case value: statement
break;
default:statement
*/