## Expersion

### Unary

- null 空指针
- Object.prototype.toStrng 无法区分包装类型和基本类型
-  *是唯一一个右结合符

运算符优先级

a.b 

逻辑

逻辑运算的短路逻辑 √  当作 if-else

三元表达式多问号的分支结构 右结合还是左结合

> JavaScript中有几种加法？
>
> Number +   String +
>
> 乘法：Number *

装箱和拆箱

- Number String Symbol Boolean

- new Number(2) 包装成对象

- Symbol 不可以用new

- void function(){return this}().apply(Symbol("3")) 装箱

- 1 + {valueOf(){return 1}}  valueof 比 toString 优先级高

- toPrimitive()

  String2Number

  