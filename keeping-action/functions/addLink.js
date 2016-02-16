title='添加链接';
d3.select('title').html(title);

function print(selection,object){
  selection.append('pre').html(object.toString());
}



function add_link(selection,href,html){
  selection.append('a').attr('href',href).html(html);
}

print(d3.select('body'),add_link);
add_link(d3.select('body').append('p').html('百度'),'http://www.baidu.com','baidu');
