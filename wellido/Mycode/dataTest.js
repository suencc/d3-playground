var data = [ 1, 2, 3, 4, 5 ];
d3.select("body").selectAll("div")
    .data(data)
    .enter()
    .append("div")
    .style("color",function(d){
            if(d<3){return "red";}
            else  {return "green";}          
    })
    .text(function(d){
           return "Well" + d;
                     })
