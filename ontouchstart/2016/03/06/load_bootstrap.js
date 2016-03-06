---
css: 
  rel: stylesheet
  href: //cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.min.css
theme:
  rel: stylesheet
  href: //cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap-theme.min.css
jquery: 
  src: //cdn.bootcss.com/jquery/1.11.3/jquery.min.js
js:
  src: //cdn.bootcss.com/bootstrap/3.3.5/js/bootstrap.min.js
---
d3.select('head').append('link').attr({{ page.css | jsonify }});
d3.select('head').append('link').attr({{ page.theme | jsonify }});
d3.select('head').append('script').attr({{ page.jquery | jsonify }});
d3.select('head').append('script').attr({{ page.js | jsonify }});

