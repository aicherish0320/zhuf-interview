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
