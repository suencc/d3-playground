title = '数组';
d3.select('title').html(title);
d3.select('body').append('h1').html(title);

function print_array(array){
  var ul=d3.select('body').append('ul');
  array.forEach(function(item,index){
    
    ul.append('li').html(item);
  });
}

nums=[1,2,3];
print_array(nums);
language=['JAVA','C','C++','PHP'];
print_array(language);
