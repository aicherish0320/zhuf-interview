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
