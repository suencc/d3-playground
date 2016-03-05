console.log(d3.select("body"));
d3.select("body").append("p").html("50% off all items on the 3rd of March!");
d3.select("body").append("p").attr("id","sale_6A").html("25% off all items on the 6rd of April!");
console.log(d3.select("p#sale_6A").style("color","pink").text());
