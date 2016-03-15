function style(selection) {
  selection.append('span')
  .html("云中谁寄锦书来，雁字回时，月满西楼")
  .style('color','blue')
  .style('font-size','x-large');
}
style(d3.select('body'));
