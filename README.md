# 珠峰面试题

## Vue 面试题

### 1. `v-for` 中为什么要用 `key`

### 2. 描述组件的渲染和更新过程

- 渲染组件时，会通过 `Vue.extend`方法构建子组件的构造函数，并进行视力话。最终手动调用`$mount`进行挂在。更新组件时会进行 `patchVNode` 流程，核心就是 `diff` 算法

### 3. 组件中的 `data` 为什么时一个函数？

同一个组件被复用多次，会创建多个实例。这些实例用的是同一个构造函数，如果 `data` 是一个对象的话。那么所有组件都共享了同一个对象。为了保证组件的数据独立性要求每个组件必须通过 `data` 函数返回一个对象作为组件的状态。

### 4. `Vue`中事件绑定的原理

`Vue`的事件绑定分为两种，一种是原声的事件绑定，还有一种是组件的事件绑定。

- 原生 `dom` 事件的绑定采用的是 `addEventListener`实现
- 组件绑定事件采用的是 `$on`方法

### 5. `v-model` 中的实现原理及如何自定义`v-model`

`v-model` 可以看成是 `value + input`方法的语法糖

当 `v-model` 绑定在 `input` 元素上时，处理绑定对应的事件，还会生成一个 `directives`，添加`compositionstart`处理原生输入框的问题。

### 6. `Vue`中`v-html`会导致哪些问题？

- 可能会导致 `xss` 攻击
- `v-html` 会替换掉标签内部的字元素

### 7. `Vue`父子组件生命周期调用顺序

- 加载渲染过程
  - 父`beforeCreate` -> 父`created` -> 父`beforeMount` -> 子 `beforeCreate` -> 子 `created` -> 子 `beforeMount` -> 子`Mounted` -> 父`Mounted`
- 子组件更新过程
  - 父`beforeUpdate` -> 子`beforeUpdate` -> 子`updated` ->父`updated`
- 父组件更新过程
  - 父`beforeUpdate` -> 父`updated`
- 销毁过程
  - 父`beforeDestroy` -> 子`beforeDestroy` -> 子`destroyed` -> 父`destroyed`

> 组件的调用顺序都是先父后子，渲染完成的顺序是先子后父；组件的销毁操作都是先父后子，销毁完成的顺序是先子后父

### 8. `Vue`组件如何通信？

- 父子间通信，父 -> 子通过`props`、子 -> 父 `$on`、`$emit`
- 获取父子组件实例的方式 `$parent`、`$children`
- 在父组件中提供数据子组件进行消费`Provide`、`inject`
- `Ref`获取实例的方式调用组件的属性或者方法
- `Event Bus`实现跨组件通信
- `Vuex` 状态管理实现通信

### 9. `Vue` 中相同逻辑如何抽离？

- `Vue.mixin`用法，给组件每个生命周期，函数等都混入一些公共逻辑

### 10. 为什么要使用异步组件？

- 如果组件功能多打包出的结果会变大，我可以采用异步的方式来加载组件。主要依赖 `import()` 这个语法，可以实现文件的分割加载。
- `import` 原理是 `jsonp`

### 11. 什么是作用于插槽

- 插槽：
  - 创建组件虚拟节点时，会将组件的儿子的虚拟节点保存起来。当初始化组件时，通过插槽属性将儿子进行分类
  - 渲染组件时会拿到对应的 slot 属性的节点进行替换操作。
- 作用域插槽：
  - 作用域插槽在解析的时候，不会作为组件的孩子节点。会解析成函数，当子组件渲染时，会调用此函数进行渲染

### 12. 谈谈你对 keep-alive 的理解

- `keep-alive` 可以实现组件的缓存，当组件切换时不会对当前组件进行卸载，常用的 2 个属性`include/exclude`，2 个声明周期`activated/deactivated`
- LRU 算法 > 最近最久未使用法

### 13. Vue 常见的性能优化

- 编码优化
  - 不要将所有的数据都放在 data 中，data 中的数据都会增加 getter 和 setter ，会收集对应的 watcher
  - vue 在 v-for 时给每项元素绑定事件需要用事件代理
  - SPA 页面采用 keep-alive 缓存组件
  - 拆分组件（提供复用性、增加代码的可维护性，减少不必要的渲染）
  - v-if 当值为 false 时内部指令不会执行，具有阻断功能。很多情况下使用 v-if 代替 v-show
  - key 保证唯一性（默认 vue 会采用就地复用策略）
  - Object.freeze 冻结数据
  - 合理使用路由懒加载、异步组件
  - 尽量采用 runtime 运行时版本
  - 数据持久化的问题（防抖、节流）
- Vue 加载性能优化
  - 第三方模块按需导入 (babel-plugin-component)
  - 滚动到可视区域动态加载
  - 图片懒加载
- 用户体验
  - app-skepeton 骨架屏
  - app-shell app 壳
  - pwa
- SEO 优化
  - 预渲染插件 prerender-spa-plugin
  - 服务端渲染 ssr
- 打包优化
  - 使用 cdn 的方式加载第三方模块
  - 多线程打包 happypack
  - splitChunks 抽离公共文件
  - sourceMap 生成
- 缓存、压缩
  - 客户端缓存、服务端缓存
  - 服务端 gzip 压缩

### 14. vue 3.0 你知道有哪些改进？

- vue3 采用了 ts 来编写
- 支持 composition api
- vue3 中响应式数据原理改成 proxy
- vDom 对比算法更新，只更新 vDom 绑定了动态数据的部分

### 15. 实现 hash 路由 和 history 路由

- onhashchange
- history.pushState

### 其他

- 双向绑定和 vuex 是否冲突
- vue.set 的原理
- 知道 vue 生命周期内部怎么实现的么
- vue-lazyLoader 的原理，手写伪代码

## 模块化

### 什么是模块化

- 模块化就是按照一个的规则把代码封装成若干的相互依赖的文件并进行组合
- 每个模块内的数据都是私有的，只向外选择性的暴露一些方法和数据与外界进行数据通信

### 模块化的意义

- 有利于代码分享、解耦以及复用
- 团队并行开发
- 避免命名冲突
- 相互引用，按需加载

### 模块化的发展史

- 自执行函数
- AMD(Asynchronous Module Definition)
- CMD(Common Module Definition)
- CommonJS(服务器端开发)
- UMD(Universal Module Definition)
- ES6 Module、ESM
  - ES6 模块的设计思想是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量
  - CommonJS 模块输出的一个值的拷贝，ES6 模块输出的是值的引用
    - export {变量}，导出的是一个变量的引用
    - export default 这种方式，导出的是一个值
  - CommonJS 模块是运行时加载，ES6 模块是编译时输出接口
