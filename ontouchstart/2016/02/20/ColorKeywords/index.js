d3.select('head').append('style').html('div { border : 1px solid black; }');
d3.select('head').append('style').html('div { margin: 1em; }');
d3.select('head').append('style').html('div { padding: 1em; }');
d3.select('head').append('style').html('div { text-align: center; }');

function list(container, data) { 
  function color(selection, color, background) {
    selection.style({ 
      color: color,
      background: background
    });
  }

  function compare_color(container, d) {
    color(container.append('div').html(d), d, 'white');
    color(container.append('div').html(d), d, 'black');
    color(container.append('div').html(d), 'white', d);
    color(container.append('div').html(d), 'black', d);
  }

  container.selectAll('div')
    .data(d3.keys(data))
    .enter()
    .append('div')
    .each(function (d) {
       compare_color(d3.select(this), d);
       compare_color(d3.select(this), data[d]);
    });
}

var url = '//bigdata-mindstorms.github.io/d3-playground/ontouchstart/2016/02/20/ColorKeywords/data.json';
d3.json(url, function (e, d) { list(d3.select('body'), d); });
