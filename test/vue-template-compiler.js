const compiler = require('vue-template-compiler');

const compile = (str) => {
  const result = compiler.compile(str);
  return result.render;
}

console.log(compile('<div id="list" v-test><span>Hello</span></div>'));
// with(this){return _c('div',{directives:[{name:"test",rawName:"v-test"}],attrs:{"id":"list"}},[_c('span',[_v("Hello")])])}

console.log(compile(`<div><input type="text" v-model="text"><p>{{text}}</p></div>`));

// console.log(JSON.stringify(compiler.compile('<div id="list" v-test></div>'), null, 2));


/*
该render函数调用方式：（/core/instance/render.js）
vnode = render.call(vm._renderProxy, vm.$createElement)

Vue 在线 Todo Demo
https://jsfiddle.net/yyx990803/4dr2fLb7/
 */
