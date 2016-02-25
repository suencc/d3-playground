var svg = d3.select("body")
	    .append("svg")
	    .attr("width", 200)
	    .attr("height",200);
    svg.append("circle")
       .attr({
              cx : 50,
              cy : 50,
               r : 20 
                    }); 
