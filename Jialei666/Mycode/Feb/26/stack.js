function print_stack(array){
  var ul = d3.select('body').append('ul');
  var temp;
  for (var i=0;i<(array.length/2);i++)
  {
  temp=array[array.length-1-i];
  array[array.length-1-i]=array[i];
  array[i]=temp;
  }
  array.forEach(function(item, index, array) {
    ul.append('li').html(item);
  });
}


数组 = [1,2,3,4,5,6,7,8,9,0];
print_stack(数组);
