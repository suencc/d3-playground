---
  attr:
    rel: stylesheet
    href: https://bigdata-mindstorms.github.io/d3-playground/amarande/2016/03/04/background.css
---

d3.select('head').append('link').attr({{page:attr | jsonify}});
