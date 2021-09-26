import cache from './cache'
import { ruleIndex, sheet } from './doms'

const css = (tsa: TemplateStringsArray, ...interpolations: any[]) => {
  const input = tsa.reduce((final, str, i) => `${final}${str}${interpolations[i] ?? ''}`, '')
  const cls = `cls-${cache.cls}`
  const rule = `.${cls}{${input}}`
  sheet.insertRule(rule, ruleIndex)
  return cls
}

export default css
