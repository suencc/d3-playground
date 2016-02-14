title = 'Happy New Year,everyone.';
d3.select('title').html(title);
d3.select('body').append('h3').html(title).style('font-weight','bold')
                                           .style('color','red')
                 .append('p').html('Happy New Year,everyone!');
function style(selection) {
  selection.append('span').html('monkey').style('color','yellow');
}
style(d3.select('body'));
