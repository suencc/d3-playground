---
attr: 
  rel: stylesheet
  href: //bigdata-mindstorms.github.io/d3-playground/VeroniqueSoleil/2016/03/08/background.css
---
d3.select('head').append('link').attr({{ page.attr | jsonify }});
