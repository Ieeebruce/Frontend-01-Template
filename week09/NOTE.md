# 每周总结可以写在这里

> 一晃眼都已经第九周了，从讲浏览器开始，一是因为难度太大，二是每天不是在上班就是在上班路上，感觉真的是：太难啦！！！

# [作业](https://share.mubu.com/doc/IFDDWAOGHV)

### Animation

- @keyframes-define-关键帧
- animation-use

> 刷新 60HZ 以上（电纸书屏幕不刷新？）

```css
@keyframes xxx {
  from {
    background: red;
  }
  to {
    background: green;
  }
}
@keyframes xxx {
  0% {
    background: red;
  }
  50% {
  }
  75% {
  }
  100% {
    background: green;
  }
}
#div {
  animation: xxx infinite;
}
```

- Attributes
  - animation-name
  - animation-duration
  - animation-timing-function // ease ease-in ease-out ...
  - animation-delay
  - animation-iteration-count
  - animation-direction

### Transition

- Attributes
  - transition-property
  - transition-duration
  - transition-timing-function
  - transition-delay

* time-function
  x-time
  y-变化的属性百分比

* 贝塞尔曲线
  一次贝塞尔曲线
  二次贝塞尔曲线
  三次贝塞尔曲线
  。。。

### 渲染和颜色

GPU 一万个小学生
CPU 一个大学生

### HTML

必知必会的实体
quot
amp
lt
gt

< & "

- namespace

<pre>   
</pre>
<div style="white-space:pre-wrap"><div>

- 语义化

### DOM

Node
element
HTML-element
SVG-element
document
characterData
documentFragment
documentType

// DOM 数组会实时的变化
// 将页面的 node append 到别的位置，是移动不是复制
导航类操作
parentNode
childNodes
firstChild
lastChild
nextSibling
previousSibling
修改操作
appendChild
insertBefore
removeChild
replaceChild
高级操作
compareDocumentPosition 比较节点关系的函数
contains 检查一个节点是否包含另一个节点
isEqualNode 检查节点是否完全相同
cloneNode 还可以深拷贝
isSameNode

Event

Range
