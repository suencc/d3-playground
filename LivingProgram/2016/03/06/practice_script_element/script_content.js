---
attr:
  charset: 'utf-8'
  src: //bigdata-mindstorms.github.io/d3-playground/LivingProgram/2016/03/06/practice_script_element/background.js
---
d3.text('{{ page.attr.src }}', function (e, d) {
  if(!e) {
    d3.select('head').append('script').html(d);
  }
});
