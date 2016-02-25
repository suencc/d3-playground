
array = [1,9,9,5,0,5,2,7];
var w = 300;
var h = 100;
var svg = d3.select('body')
            .append('svg')
            .attr('width',w)
            .attr('height',h);

svg.selectAll('rect')
   .data(array)
   .enter()
   .append('rect')
   .attr(
     {
            x : function(d,i){
                  return i*(w/array.length);
                             },
            y : function(d){
                  return h-d*10;
                           },
            width : w/array.length,
            height : function(d){
                       return d*10;
                                },                             
      }  
         );

