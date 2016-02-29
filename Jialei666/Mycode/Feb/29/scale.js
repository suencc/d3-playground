/*线性分配值*/
var scale = d3.scale.linear();
scale.domain([0,20])
     .range([0,100]);
var result = scale(2);
d3.select('body').append('div').html(result);