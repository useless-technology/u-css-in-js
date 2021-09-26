const abs = Math.abs

const trim = (value: string) => value.trim()

const replace = (value: string, searchValue: string | RegExp, replaceValue: string) =>
  value.replace(searchValue, replaceValue)

const indexOf = (value: string, searchString: string, position = 0) => value.indexOf(searchString, position)

const fromCharCode = String.fromCharCode

const charCodeAt = (value: string, index = 0) => value.charCodeAt(index)

// const hash = (value: string, length: number) => (length << 2) ^()

export { abs, trim, replace, indexOf, fromCharCode, charCodeAt }
