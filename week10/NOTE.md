# 每周总结可以写在这里

## Range API

var range = new Range()
Attributes

range.setStart(element, 9)
range.setEnd(element, 4)

var fragment = range.extractContents() // 可以往文本中间插入内容
range.insertNode

### Range 的使用

```javascript
let element = document.getElementById("a");

function reverseChildren(element) {
  let range = new Range();
  range.selectNodeContents(element); // 使 Range 节点包含某个节点的内容

  let fragment = range.extractContents(); // 将 Range 的内容从一个文档数移动到一个文档片段中
  var l = fragment.childNodes.length;
  while (l-- > 0) {
    fragment.appendChild(fragment.childNodes[l]);
  }
  element.appendChild(fragment); // 只会添加 Fragment 内部的内容，Fragment 本身不会被添加
}
reverseChildren(element);
```

```javascript
<div id="a">123456789</div>;
let element = document.getElementById("a");
let range = new Range();
range.setStart(element, 3);
range.setEnd(element, 6);
```

## CSSOM

styleSheet

getComputedStyle(elt, pseudoElt)
// elt 想要获取的元素 pseudoElt 可选，想要获取的伪元素






日报：流水账
周报：思考和规划



- data协议，独立文件都可以写成内联的
    data:text/html,<a></a>
    data:text/html,base64:PGE+PC9hPg==
- 绑定事件不会消耗性能，触发事件才会消耗。
  实验之后，事件委托减少了内存的消耗。
  还有一个优点是 dom 变动不会给委托事件带来影响
  择机使用
