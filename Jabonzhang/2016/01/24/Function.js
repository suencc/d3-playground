title="Happy Spring Festival !!";
d3.select("title").html(title);
d3.select("body").append("h1").html(title).style("color","red");
selection = d3.select("body").append("div"); 
selection.append("input").attr("type","number").attr("id","a"); 
selection.append("text").html(" * "); 
selection.append("input").attr("type","number").attr("id","b"); 
selection.append("button").html(" = ").on("click",function() { 
var a = selection.select("input#a").property("value"); 
var b = selection.select("input#b").property("value"); 
var NaN = Number.parseFloat(a) * Number.parseFloat(b); 
selection.append("text").html(NaN); 
});
