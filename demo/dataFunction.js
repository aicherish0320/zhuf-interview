function VueComponent() {}

VueComponent.prototype.$options = {
  data: { message: 'Hello' }
}

const v1 = new VueComponent()
v1.$options.data = 'World'
const v2 = new VueComponent()
console.log(v2.$options.message)
