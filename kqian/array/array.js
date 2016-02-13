title = 'array';
d3.select('title').html(title);
d3.select('body').append('h1').html(title);

function print_array(array) {
  var ul = d3.select('body').append('ul');
  array.forEach(function(item, index, array) {
    ul.append('li').html(item).attr('class', 'item-' + index);
    console.log(array);
  });
}

array = [1, 2, 3];
print_array(array);

fruits = ['banana','orange','apple'];
print_array(fruits);
