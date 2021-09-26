import { defineComponent } from 'vue'
import { css, cssGlobal } from '..'

export default defineComponent({
  setup: () => {
    // const css = (styleString: string): string => {
    //   id++
    //   const rule = `.css-in-js-${id} {${styleString}}`
    //   sheet.insertRule(rule, sheet.cssRules.length)
    //   return `css-in-js-${id}`
    // }

    // const classNameOne = css('background: black; color: white')

    const colorCss = `color: white;`

    const classNameOne = css`
      background: black;
      ${colorCss}
    `

    cssGlobal`margin : 0`

    return () => <div class={classNameOne}>Test</div>
  }
})
