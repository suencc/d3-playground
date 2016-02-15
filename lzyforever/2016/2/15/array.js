d3.select("body").append("h1").html("汽车品牌");

function print(array){
  selection = d3.select("body").append("table");
  array.forEach(function(item,index){
    tr = selection.append("tr");
    td_user(tr, item); 
  })
}

function td_car(selection, array){
  tr.append("td").html(array.id);
  tr.append("td").html(array.carName);
}

cars = [{"id":1,"carName":"保时捷"},{"id":2,"carName":"兰博基尼"},{"id":3,"carName":"英飞尼迪"}];
print(cars);
