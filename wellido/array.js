function add_color(selection, color)
{
  selection.style('color',color);
}  

htmls=['click to CSDN1','click to CSDN2','click to CSDN3'];
colors=['red','green','blue'];

for(var i=0;i<3;i++)
{
  add_color(d3.select('body').append('a').attr('href','http://www.csdn.net/').append('button').html(htmls[i]),colors[i]);
}
