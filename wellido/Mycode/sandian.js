var w = 200;
var h = 100;

point = [[51,05],[05,19],[95,05],[27,15],[13,70]];

var svg = d3.select('body')
            .append('svg')
            .attr('width',w)
            .attr('height',h);

svg.selectAll('circle')
   .data(point)
   .enter()
   .append('circle')
   .attr({
    cx : function(d){return d[0];},
    cy : function(d){return d[1];},
     r : 5,
  fill : 'blue' 
});
