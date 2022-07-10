function VueComponent() {}

VueComponent.prototype.$options = {
  // data: { message: 'Hello' }
  data() {
    return {
      message: 'Hello'
    }
  }
}

const v1 = new VueComponent()
const data1 = v1.$options.data()
data1.message = 'World'
const v2 = new VueComponent()
const data2 = v1.$options.data()
console.log(data2)
