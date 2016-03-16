
function f(c, d) {
  c.html(d);
}

a = d3.select('title');
b = 'welcome';
c = d3.select('body').append('button');
d = 'wellido';
f(a , b);
f(c , d);
