d3.select('head').append('style').html('div { border : 1px solid black; }');
d3.select('head').append('style').html('div { margin: 1em; }');
d3.select('head').append('style').html('div { padding: 1em; }');
d3.select('head').append('style').html('div { text-align: center; }');

function list(container, data) { 
  container.selectAll('div')
    .data(d3.keys(data))
    .enter()
    .append('div')
    .each(function (d) {
       d3.select(this)
         .append('div')
         .html(function(d) { return d; })
         .style('color', function (d) { return d; })
         .style('background', 'white');
       d3.select(this)
         .append('div')
         .html(function(d) { return data[d]; })
         .style('color', function (d) { return data[d]; })
         .style('background', 'white');
       d3.select(this)
         .append('div')
         .html(function(d) { return d; })
         .style('color', function (d) { return d; })
         .style('background', 'black');
       d3.select(this)
         .append('div')
         .html(function(d) { return data[d]; })
         .style('color', function (d) { return data[d]; })
         .style('background', 'black');
    });
}

d3.json('color.json', function (e, d) { list(d3.select('body'), d); })
