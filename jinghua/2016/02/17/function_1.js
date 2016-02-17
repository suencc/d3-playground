title = '函数(计算圆的面积)';
d3.select('title').html(title);
d3.select('body').append('h2').html(title);
var i = 0;
selection = d3.select("body").append("div");
selection.append('text').html('请输入圆的半径').append('input').attr('type','number').attr('id','num_r');
selection.append("button").html("确定").on("click",function(){artRound()});

function artRound() {
    selection.select("#area_"+i).remove();
    var r = selection.select("input#num_r").property("value");
    var area = Math.PI*r*r;
    i=i+1;
    selection.append("div").attr('id',"area_"+i).html("<br/>面积为：" +area);
}
