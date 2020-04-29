#### ordinary objects
* GetPrototypeOf
   * Return O.Prototype
* SetPrototypeOf
* IsExtensible 
   * Return O.Extensible
* PreventExtensions
   * Set O.Extensible to false and then return true
* GetOwnProperty
* DefineOwnProperty
* HasProperty
* Get
* Set
* Delete
* OwnPropertyKeys
* ObjectCreate 
* OrdinaryCreateFromConstructor 
* GetPrototypeFromConstructor 
#### special objects
###### Function
* call  视为函数Function
* Construct 可以被new 操作符调用，根据new的规则返回对象。
###### Bound Function
除了 function 的属性外
* BoundTargetFunction 绑定的目标函数
* BoundThis 绑定的 this 值
* BoundArguments 绑定的参数对象
###### Array
* length
###### String Function
* "length" property are non-writable and non-configurable
###### Arguments Function
###### Integer-Indexed  ViewedArrayBuffer,ArrayLength, ByteOffset, and TypedArrayName 
* Let indexedPosition be (index × elementSize) + offset
* 根据第0位的内存地址 + 偏移量 取值
###### Module Namespace
* module
* exports
###### Proxy Object
* ProxyHandler
