d3.select('head').append('style').html('div { border : 1px solid black; }');
d3.select('head').append('style').html('div { margin: 1em; }');
d3.select('head').append('style').html('div { padding: 1em; }');
d3.select('head').append('style').html('div { text-align: center; }');

function 列表(容器, 数据) { 
  function 着色(选项, 前景色, 背景色) {
    选项.style({ 
      color: 前景色,
      background: 背景色
    });
  }

  function 颜色比较(d) {
    着色(容器.append('div').html(d), d, 'white');
    着色(容器.append('div').html(d), d, 'black');
    着色(容器.append('div').html(d), 'white', d);
    着色(容器.append('div').html(d), 'black', d);
  }

  d3.keys(数据)
    .forEach(function (d) {
       颜色比较(d);
       颜色比较(数据[d]);
    });
}

var url = '//bigdata-mindstorms.github.io/d3-playground/ontouchstart/2016/02/20/ColorKeywords/data.json';
d3.json(url, function (错误, 结果) { 
  if(! 错误 ) {
    列表(d3.select('body'), 结果);
  }
});
