selection = d3.select("body").append("div");
selection.append("input").attr("type","text").attr("id","get");
selection.append("button").html("=").on("click",function(){
var get = selection.select("input#get").property("value");
var result = eval(get);
selected = selection.append("text");
d3.select("text").html("");
d3.select("text").html(result);
});
