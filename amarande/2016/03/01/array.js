title = '数组';
d3.select('title').html(title);

d3.select('body').append('h1').html('Main cities in Canada');
mainCities_Canada = ['Ottawa','Toronto','Vancouver','Edmonton','Montreal'];
print_array(mainCities_Canada);

function print_array(array){
 var ul=d3.select('body').append('ul');
 array.forEach(function(element,index,array){
   ul.append('li').html(element).attr('class','item-'+index);
   console.log(array);
 });
}
