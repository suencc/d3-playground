v/*输出一个柱状图*/
var width = 600;  //设置输出图形的大小
var height = 600;  
var svg = d3.select('body').append('svg') //声明一个svg图形  
            .attr("width",width)  
            .attr("height",height);  
          
var dataset = [ 10 , 20 , 30 , 40 , 50 ];  
          
svg.selectAll('rect')  
   .data(dataset)  //绑定数据集
   .enter()        //确定数据集的数量
   .append('rect')  //追加那么多个‘rect’
   .attr('y',10)  
   .attr('x',function(d,i){  
         return i * 30;  
   })  
   .attr('height',function(d,i){  
         return d * 10;  
   })  
   .attr('width',28)  
   .attr('fill','black');  