title = '数组';
d3.select('title').html(title);
d3.select('body').append('h2').html(title);

selection = d3.select("body").append("table");

head = ['编号','姓名','年龄'];
users = [{'id':1,'name':'张三','age':'19'},{'id':2,'name':'李四','age':'20'},{'id':3,'name':'王五','age':'22'}];

function t_head(array){
  tr = selection.append("tr").style("background","grey");
  array.forEach(function(item,index){
    tr.append("th").html(item);
  })
}

function t_user(array){
  t_head(head);
  array.forEach(function(item,index){
    tr = selection.append("tr"); 
    t_main(tr,item); 
  })
}

function t_main(selection,array){
  tr.append("td").html(array.id);
  tr.append("td").html(array.name);
  tr.append("td").html(array.age);
}

t_user(users);
