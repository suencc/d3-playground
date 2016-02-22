
var temp;
function print_arr(array){
  var ul = d3.select('body').append('ul');
  array.forEach(function(item,index,array) {
    ul.append('li').html(item).attr('class','item-'+index);
    console.log(array);
  });
}


数组 = [1,2,3];
print_arr(数组);