title = 'MENU';
d3.select('title').html('数组');
d3.select('body').append('h1').html(title);
function print_array(food){
var ol = d3.select('body').append('ol');
for(var i = 0; i<food.length; i++){
var li = ol.append('li').style('color','blue');
li.html(types[i]);
print_arrayOl(food[i],li);
}
}
function print_arrayOl(array,li){
var ul = li.append('ul').style('color','black');
array.forEach(function(item){
ul.append('li').html(item);
});
}
types = 3;
food = [['apple','orange','banana'], ['tea','milk','coffee'], ['pizza','mousse','cookies']];
types = ['Fruits', 'Drink', 'Dessert'];
print_array(food);
