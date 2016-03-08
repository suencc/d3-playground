
d3.select('body').append('blockquote').html('Functions')


function add_link(selection, href, html){
  selection.append('a').attr('href', href).html(html)
}
function print(selection, object){
  selection.append('pre').html(object.toString());
}
function alertf(html){
  alert(html);
}

function add(a,b){
  a+b=c
}

print(d3.select('body'), print);

add_link(d3.select('body').append('p').html('This is the Link') ,'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'MDN Functions');

alertf(This is an Alert!);

add(3,5)
