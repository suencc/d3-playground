title='水果组';
d3.select('title').html(title);
d3.select('body').append('h1').html(title).style('color','red');
function print_array(Fruits){
  var ol =d3.select('body').append('ol');
  for(var i= 0; i< Fruits.length; i++){
    var li = ol.append('li').style('color','blue');
    li.html(types[i]);
    print_arrays(Fruits[i],li);
  }
}

function print_arrays(array,li){
     var ul = li.append('ul').style('color','violet');
     array.forEach(function(item){
      ul.append('li').html(item);
     });
}

types = 2;
Fruits = [['Apple', 'Banana', 'Orange'],['Pear', 'strawberry', 'Grape']];
types = ['水果','好吃'];
print_array(Fruits);
