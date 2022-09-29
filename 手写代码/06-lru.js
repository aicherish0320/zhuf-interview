class Lru {
  constructor(opacity) {
    this.opacity = opacity
    this.cache = new Map()
  }
  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key)
    } else {
      if (this.cache.size > this.opacity) {
        this.cache.delete(this.map.keys().next().value)
      }
    }
    this.cache.set(key, value)
  }
  get(key) {
    if (this.cache.has(key)) {
      const tempVal = this.cache.get(key)
      this.cache.delete(key)
      return this.cache.set(key, tempVal)
    }

    return -1
  }
}
