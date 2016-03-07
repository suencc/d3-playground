---
css:                # 新 Bootstrap 核心 CSS 文件
  rel: stylesheet
  href: //cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.min.css 
theme:              # 可选的Bootstrap主题文件（一般不用引入）
  rel: stylesheet
  href: //cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap-theme.min.css 
jquery:             # jQuery文件。务必在bootstrap.min.js 之前引入
  src: //cdn.bootcss.com/jquery/1.11.3/jquery.min.js 
js:                 # 最新的 Bootstrap 核心 JavaScript 文件
  src: //cdn.bootcss.com/bootstrap/3.3.5/js/bootstrap.min.js 
---
d3.select('head').append('link').attr({{ page.css | jsonify }});
d3.select('head').append('link').attr({{ page.theme | jsonify }});
d3.select('head').append('script').attr({{ page.jquery | jsonify }});
d3.select('head').append('script').attr({{ page.js | jsonify }});
