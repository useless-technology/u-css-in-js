import { css } from '..'
import { body } from './doms'

const cssGlobal = (tsa: TemplateStringsArray, ...interpolations: any[]) => {
  const cls = css(tsa, ...interpolations)
  body.classList.add(cls)
}

export default cssGlobal
