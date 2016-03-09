d3.select('body').append('blockquote').html('Functions');


function add_link(selection, href, html){
  selection.append('a').attr('href', href).html(html);
}
function print(selection, object){
  selection.append('pre').html(object.toString());
}
function alertf(html){
  alert(html);
}
function color(selection, htmls, colors){
  selection.append('a').html(htmls).style('color', colors);
} 
color(d3.select('body'), 'ASDF', 'red');
print(d3.select('body'), 'ajlfkajs;kldfja;klsdf');
print(d3.select('body'), print);

add_link(d3.select('body').append('p').html('This is the Link') ,'https://www.youtube.com/watch?v=dQw4w9WgXcQ', ' LOL LCS VOTING');

alertf('This is an Alert!')
