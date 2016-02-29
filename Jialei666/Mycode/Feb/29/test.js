/*data 和enter只是对数据进行操作并不输出*/
var dataset = [ 10 , 20 , 30 , 40 , 50 ];  
var p = d3.select('body').selectAll('p')
          .data(dataset)
          .enter()
          .append('p')
          .text(hello);