d3.select('head').append('script').attr('src', '//bigdata-mindstorms.github.io/d3-playground/ontouchstart/2016/03/06/load_bootstrap.js');

container = d3.select('body').append('div').attr('class', 'container');
table = container.append('table').attr('class', 'table table-hover');
data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
table.append('tbody').selectAll('tr').data(data).enter().append('tr').each(function (d) { 
d3.select(this).selectAll('td').data(d).enter().append('td').html(function (d) { return d; })}); 
