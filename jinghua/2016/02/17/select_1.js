console.log(d3.select("body"));
d3.select("body").append("p")
  .style("color","blue").html("How are you?");
d3.select("body").append("p")
  .attr("class","second").html("I'm fine,thanks.");
console.log(d3.selectAll("p.second")
  .style("color","red").text());
