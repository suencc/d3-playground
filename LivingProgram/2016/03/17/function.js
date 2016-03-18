function f(c, d) {
  c.selectAll('div').data(d).enter().append('div').each(function (d) {
    var t = d3.select(this);
    t.append('h1')
     .append('a')
     .attr('href', function (d) { return 'https://en.wikipedia.org/wiki/' + d; })
     .html(function (d) { return `Wikipedia: ${d}`; });
});
}

c = d3.select('body').append('div');
d = ['English_language', 'Chinese_language', 'Spanish_language'];
f(c, d);
