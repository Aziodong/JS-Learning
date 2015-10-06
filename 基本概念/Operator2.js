//操作符

//乘法：*
/*
规则：
如果不是数值，则调用Number函数转为数值
任何数值(0除外)通过Infinity/-Infinity 计算的结果也是Infinity/-Infinity
0同Infinity/-Infinity 计算的是NaN
Infinity/-Infinity * Infinity/-Infinity =Infinity/-Infinity 
任何数值同NaN计算的结果是NaN
计算结果大于Number.MAX_VALUE或小于Number.MIN_VALUE则其值为:Infinity/-Infinity
*/

//除法：/
/*
规则：
如果不是数值，则调用Number函数转为数值
+-Infinity/任何数值(Infinity除外)=+-Infinity
+-Infinity/+-Infinity=NaN
0/0=NaN
如果是非零的有限数被零除，则结果是Infinity 或-Infinity，取决于有符号操作数的符号；
*/

//求模：%
/*
如果被除数是无穷大值而除数是有限大的数值，则结果是NaN；
如果被除数是有限大的数值而除数是零，则结果是NaN；
如果是Infinity 被Infinity 除，则结果是NaN；
如果被除数是有限大的数值而除
如果被除数是零，则结果是零
特殊值：+-Infinity;0

总结：当Infinity是被除数或者0是除数时，结果为NaN
*/
console.log("-----求模------");
console.log(Infinity%0);//NaN
console.log(Infinity%1);//NaN
console.log(0%Infinity);//0;
console.log(1%Infinity);//1
console.log(1%0);//NaN
console.log(1%0);//NaN


