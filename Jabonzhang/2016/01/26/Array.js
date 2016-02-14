title="中国移动";
d3.select("title").html(title);
d3.select("body").append("h1").html(title).style("color","red");

function print_array(array){
 var ul =d3.select('body').append('u1').style("color","green");
 array.forEach(function(item,index,array){
 ul.append("li").html(item).attr("class","item-" + index);
 console.log(array);
 });
}

移动 = ["享4G","全球通","动感地带","神州行"];
print_array(移动);
