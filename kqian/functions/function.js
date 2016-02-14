title = 'Functions';
d3.select('title').html(title);
d3.select('body').append('h1').html(title);
d3.select('body').append('blockquote').html('Generally speaking, a function is a "subprogram" that can be called by code external (or internal in the case of recursion) to the function.').style('cursor', 'pointer').on('click', function () { location = 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions';});

function add_link(selection, href, html) {
  selection.append('a').attr('href', href).html(html)
}

function print(selection, object) {
  selection.append('pre').html(object.toString());
}

print = print;
print(d3.select('body'), print);
print(d3.select('body'), add_link);

add_link(d3.select('body').append('p').html('Here is the link '), 'https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Functions', 'MDN Functions');
