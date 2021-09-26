let cls = 1
const cache = { cls: 1 }

Object.defineProperty(cache, 'cls', {
  get: () => {
    return cls++
  }
})

export default cache
