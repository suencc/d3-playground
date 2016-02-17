ul = d3.select('body').append('ul');
for(j = 1; j <= 2; j++){
  li = ul.append('li').style('color','red');
  li.html('class ' + j);
  ls = li.append('ul').style('color','black');
  for(i = 1; i <= 3; i++){
    ls.append('li').html("I'm number " + i);
  }
}
