# 事件循环
### 单线程
单线程意味着同一时间只能做一件事情，听起来似乎没有多线程那样有效率，但是JS设计成单线程是由它的作用决定的。JS作为一个浏览器脚本语言而出现，天生和浏览器打交道，为了协调事件、用户交互、脚本、呈现、网络等等，设计成单线程明显降低了在操作dom的时的复杂度。
### 宏观任务和微观任务
宿主发起的任务叫做宏观任务，JS引擎发起的任务成为微观任务，微任务是宏任务的一个子任务组。微任务执行完才会结束当前宏任务，继续执行下一个宏任务。
#### 宏观任务
一个代码片段是一个宏任务（一个script标签）
一个setTimeout
一个setInterval
一个click事件
一个请求
#### 微任务
微任务是根据入队时间决定执行顺序
产生微任务：Promise