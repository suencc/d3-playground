---
attr: 
  rel: stylesheet
  href: //bigdata-mindstorms.github.io/d3-playground/VeroniqueSoleil/2016/03/07/Background.css
---
d3.select('head').append('link').attr({{ page.attr | jsonify}} );
