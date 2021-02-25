
module.exports = {
  extensions: ['tex2jax.js'],
  jax: ['input/TeX','output/HTML-CSS'],
  messageStyle: 'none',
  tex2jax: {
    processEnvironments: false,
    processEscapes: true
  },
  TeX: {
    extensions: ['AMSmath.js', 'AMSsymbols.js', 'noErrors.js', 'noUndefined.js'],
    Macros: {
      dd: ["{\\displaystyle \\frac{\\partial #1}{\\partial #2}}",2],
      bm: ["{\\boldsymbol{#1}}",1],
      lbrc: "\\{",
      rbrc: "\\}",
      span: ["{{\\rm span}\\{#1}\\}",1]
    }
  },
  'HTML-CSS': { availableFonts: ['TeX'] }
}
