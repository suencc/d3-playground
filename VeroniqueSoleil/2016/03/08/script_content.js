---
attr:
  charset: 'utf-8'
  scr: //bigdata-mindstorms.github.io/d3-playground/VeroniqueSoleil/2016/03/08/background.js
---
d3.text('{{ page.attr.src }}', function (e, d) {
  if(!e){
    d3.select('head').append('script').html(d);
  }
});
