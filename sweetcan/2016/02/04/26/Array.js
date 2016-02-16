title='星期';
d3.select('title').html(title);
d3.select('body').append('p').html('<p>星期数组</p>');

function weekDate(weekArray){
  var ul=d3.select('body').append('ul');
  weekArray.forEach(function(item){
    ul.append('li').html(item);
});
}
weekA=['星期一','星期二','星期三','星期四','星期五','星期六','星期日'];
weekDate(weekA);
