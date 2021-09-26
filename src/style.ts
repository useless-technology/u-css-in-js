interface Style<T> {
  [T: string]: Function
}

// htmlmap
// document.createElement()
const style: Style<keyof HTMLElementTagNameMap> = {}
