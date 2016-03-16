function f(c,d) {
  c.html(d);
}
c = d3.select('body').append('button').attr('href','http://www.goodreads.com/book/show/22948457-digital-humanitarians?from_new_nav=true&ac=1&from_search=true');
d = 'Digital Humanitarians';
f (c,d);
