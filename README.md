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

## Simple Vue Compiler

`Simple Vue Compiler`基于[pure-javascript-html-parser](http://ejohn.org/blog/pure-javascript-html-parser/)的`HTML Parser`（你可以[在线测试](https://zhoukekestar.github.io/toy-vue/src/html-parser.html)这个模块）。

[ASTElement](https://sourcegraph.com/github.com/vuejs/vue/-/blob/flow/compiler.js#L69:14) 是从 HTML 转换到可 render 的代码过程中的中间对象。`AST`(`Abstract Syntax Tree`): 抽象语法树。（我们在写这个编译器的时候，AST 参考[Hypertext Abstract Syntax Tree format ](https://github.com/syntax-tree/hast))

基本的过程是：`模板` => `HTML 模板解析器` => `抽象语法树` => `生成可Render的代码`。

[在线测试 Simple Vue Compiler](https://zhoukekestar.github.io/toy-vue/src/vue-parser.html) ，降模板编译成可Render代码的简易实现。
![qq 20170710222219](https://user-images.githubusercontent.com/7157346/28022628-4df25cba-65be-11e7-9d1d-ae22d578b200.png)


Vue 中对应的代码
* [html-parser](https://sourcegraph.com/github.com/vuejs/vue/-/blob/src/compiler/parser/html-parser.js#L8:33)
* [ASTElement](https://sourcegraph.com/github.com/vuejs/vue/-/blob/flow/compiler.js#L79:25)

生成可 `render` 代码后，便可以通过[render](https://sourcegraph.com/github.com/vuejs/vue/-/blob/src/compiler/parser/index.js)函数创建 `virtual dom` 了。

## Virtual Dom

* [simple-virtual-dom](https://github.com/livoras/simple-virtual-dom)
* [深度剖析：如何实现一个 Virtual DOM 算法](https://github.com/livoras/blog/issues/13)
* [最小编辑距离问题：递归与动态规划](https://github.com/youngwind/blog/issues/106)
* [diff算法](https://zhuanlan.zhihu.com/p/20346379)

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
* [aboutVue](https://github.com/banama/aboutVue)
* [vue-analysis](https://github.com/Ma63d/vue-analysis)
* [read-vue-source-code](https://github.com/numbbbbb/read-vue-source-code)
