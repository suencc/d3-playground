var data = [ 25, 5, 15, 30, 55 ];
var moviename = [ "a", "b", "c", "d", "e" ];
d3.select("body").selectAll("div")
    .data(data)
    .enter()
    .append("div")
    .attr("class", "bar")
	.style({"height":20,"background":"#f60","margin-bottom":5})
	.style("width",
	function(d){
	return d*10 + "px"
	})
	.text(function(d){
	return d + " ✈"
	})
	.style({"text-align":"right","color":"#fff"})
