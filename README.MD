## JohnSmith的node.js学习记录!
##了不起的Node.js 笔记

#### Object.kes(object) 
获取object的自有键

#### 阻塞和非阻塞IO
php sleep()会阻塞线程的进行， js setTimeout异步执行，事件轮询：当所有事件分发完毕之后再执行回调函数。


#### 行内替换元素和行内非替换元素
非替换元素增加padding不影响行高度，但是内容高度会变化
替换元素则会撑开父元素


#### 301 he 301

他们的不同在于。301表示旧地址A的资源已经被永久地移除了（这个资源不可访问了），搜索引擎在抓取新内容的同时也将旧的网址交换为重定向之后的网址；
302表示旧地址A的资源还在（仍然可以访问），这个重定向只是临时地从旧地址A跳转到地址B，搜索引擎会抓取新的内容而保存旧的网址。  


#### jQuery onload 和 window.onload
window.onload 在所有元素加载完毕，图片都下载完毕之后才执行的方法
$(document).onload 在dom树加载完毕就执行
$(window).load 等价于 window.onload