const sheet = document.head.appendChild(document.createElement('style')).sheet!
const body = document.body
const ruleIndex = sheet.cssRules.length

export { sheet, body, ruleIndex }
