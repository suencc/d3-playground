d3.select('title').html('just a test');
d3.select('button').html('选中HTML元素并修改');

d3.select('body').append('div').append('a').attr('href','http://www.uxsino.com').append('img').attr('src','http://www.uxsino.com/upload/201512/1451548842.jpg');
d3.select('body').append('div').html('点击图片打开官网').style('font-size','40').style('background','maroon');
d3.select('a').attr('href','https://bigdata-mindstorms.github.io/d3-playground/');
d3.select('body').append('div').html('官网链接被选中修改');
