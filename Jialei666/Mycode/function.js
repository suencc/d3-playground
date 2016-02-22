function test(selection) {
selection.append('div').html('这是一个函数').style('color','red');
}
test(d3.select('body').html('调用这个函数').style('color','blue'));