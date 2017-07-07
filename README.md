# toy-vue

[![Airbnb Style](https://img.shields.io/badge/code%20style-Airbnb-ff5a5f.svg?style=flat-square)](https://github.com/airbnb/javascript)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

Vue toys.

## [vue-base.html](https://zhoukekestar.github.io/toy-vue/src/vue-base.html)
一个不能再简单的 `Vue` 核心代码，一个不能再具体的 `Vue` 源码分析。（此处用了夸张的修辞手法）。代码参考了[vue-come-true/vue-come-true-First](https://github.com/coderzzp/vue-come-true/blob/master/vue-come-true-First/vue-come-true.html)，在此感谢原作者的整理。

PS: [vue-base.html](https://zhoukekestar.github.io/toy-vue/src/vue-base.html) 需要在最新的 `Chrome` 上运行，因为用到了很多 `ES6` 的特性，比如：`class`, `arrow function` 等。当然，作为一个前端，我默认你的 `Chrome` 版本已经是最新了。

#### Vue 创建流程
![vue-base](https://user-images.githubusercontent.com/7157346/27902223-852f21c2-6267-11e7-9db5-420a70bed0ca.jpg)

#### Dep 和 Watcher 关系
![dep-watcher](https://user-images.githubusercontent.com/7157346/27902225-8675656e-6267-11e7-8769-6914a70cbf25.jpg)

#### 流程图下载
你可以从 Google Drive 下载[流程图](https://drive.google.com/file/d/0B9dg6tL91XqfUnpvUk9VWnN3Uzg/view?usp=sharing)。

#### 注意点
* 图中的 `DocumentFragment` 在实际代码中会用 `Virtual Dom` 代替
* 图中的 `Compile` 在实际代码中会用 `HTML Parser` 做一些更具体的操作。如编译模板成可生成 `Virtual Dom` 的代码, 具体可查看`/test/vue-template-compiler`

  ```html
  <div id="list" v-test><span>Hello</span></div>
  ```

  编译成 (使用`vue-template-compiler`) ==>

  ```js
  with(this){return _c('div',{directives:[{name:"test",rawName:"v-test"}],attrs:{"id":"list"}},[_c('span',[_v("Hello")])])}
  ```
* 图中的 `setter` 和 `getter` 方法在实际代码中，还需要对 `Array` 中`push`，`pop`方法进行拦截，还需要对 `data` 进行`深度`绑定。

## HTML Parser

基于[pure-javascript-html-parser](http://ejohn.org/blog/pure-javascript-html-parser/)的`HTML Parser`。 [在线测试]()。Vue 中对应的代码[html-parser](https://sourcegraph.com/github.com/vuejs/vue/-/blob/src/compiler/parser/html-parser.js#L8:33)

创建 virtual dom 的代码通过[render](https://sourcegraph.com/github.com/vuejs/vue/-/blob/src/compiler/parser/index.js)

## Virtual Dom

[simple-virtual-dom](https://github.com/livoras/simple-virtual-dom)

## netxTick

```js
console.log(1);
Promise.resolve().then(() => console.log(2))
setTimeout(() => console.log(3), 0);
setTimeout(() => console.log(4), 0);
Promise.resolve().then(() => console.log(5))
console.log(6);
/*
output:
1 6 2 5 3 4
*/
```

更多关于 `Promise`, `Mutation observers`, `Microtasks` 的，请查看 [Tasks, microtasks, queues and schedules](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/).

## References
* [MVVM](https://github.com/fastCreator/MVVM)
* [vue come true](https://github.com/coderzzp/vue-come-true)
* [深度剖析：如何实现一个 Virtual DOM 算法](https://github.com/livoras/blog/issues/13)
* [Pure JavaScript HTML Parser](http://ejohn.org/blog/pure-javascript-html-parser/)
* [simple-virtual-dom](https://github.com/livoras/simple-virtual-dom)
