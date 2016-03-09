d3.select('head').append('script').attr('src', '//bigdata-mindstorms.github.io/d3-playground/LivingProgram/2016/03/08/load_bootstrap.js');

container = d3.select('body').append('div').attr('class', 'container');
table = container.append('table').attr('class', 'table table-hover');
data = [[9, 8, 7], [6, 5, 4], [3, 2, 1]];
table.append('tbody').selectAll('tr').data(data).enter().append('tr').each(function (d){
  d3.select(this).selectAll('td').data(d).enter().append('td').html(function (d) { return d; })
});
