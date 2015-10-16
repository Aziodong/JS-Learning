//加法 +
/*
如果有一个操作数是NaN，则结果是NaN；
如果是Infinity 加Infinity，则结果是Infinity；
如果是-Infinity 加-Infinity，则结果是-Infinity；
如果是Infinity 加-Infinity，则结果是NaN；
如果是+0 加+0，则结果是+0；
如果是-0 加-0，则结果是-0；
如果是+0 加-0，则结果是+0。
不过，如果有一个操作数是字符串，那么就要应用如下规则：
如果两个操作数都是字符串，则将第二个操作数与第一个操作数拼接起来；
如果只有一个操作数是字符串，则将另一个操作数转换为字符串，然后再将两个字符串拼接
起来。
如果有一个操作数是对象、数值或布尔值，则调用它们的toString()方法取得相应的字符串值，
然后再应用前面关于字符串的规则。
对于undefined 和null，则分别调用String()函数并取得字符串"undefined"和"null"
*/
console.log("----加法----");
console.log(1+1);//2
console.log(1+"1");//11
console.log(1+(+"1"));//2
console.log(1+true);//2
console.log(1+false);//1
console.log(1+{});//1
console.log(1+null);//1
console.log(1+undefined);//NaN
console.log(undefined+undefined);//undefined
console.log("null+null:"+(null+null));//""
console.log("Number(null):"+Number(null));
console.log("1"+true);//1true

//减法 -
/*
 如果两个操作符都是数值，则执行常规的算术减法操作并返回结果；
 如果有一个操作数是NaN，则结果是NaN；
 如果是Infinity 减Infinity，则结果是NaN；
 如果是-Infinity 减-Infinity，则结果是NaN；
 如果是Infinity 减-Infinity，则结果是Infinity；
 如果是-Infinity 减Infinity，则结果是-Infinity；
 如果是+0 减+0，则结果是+0；
 如果是+0 减0，则结果是0；
 如果是0 减0，则结果是+0；
 如果有一个操作数是字符串、布尔值、null 或undefined，则先在后台调用Number()函数将
其转换为数值，然后再根据前面的规则执行减法计算。如果转换的结果是NaN，则减法的结果
就是NaN；
 如果有一个操作数是对象，则调用对象的valueOf()方法以取得表示该对象的数值。如果得到
的值是NaN，则减法的结果就是NaN。如果对象没有valueOf()方法，则调用其toString()
方法并将得到的字符串转换为数值。
*/
console.log("------减法-------")
console.log(2-false);//2
console.log(2-true);//1;
console.log(2-{});//NaN
console.log(Number({}));//NaN
console.log(2-null);//2
console.log(2-NaN);//NaN

//相等
/*
null == undefined true 
true == 1 true
"NaN" == NaN false 
true == 2 false
5 == NaN false 
undefined == 0 false
NaN == NaN false 
null == 0 false
NaN != NaN true 
"5"==5 true
false == 0 true
*/