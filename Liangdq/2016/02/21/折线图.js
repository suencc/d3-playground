var jsonData = Array.apply(0,Array(31)).map(function(d,i){
  i++;
  console.log(i);
  return  {date : i ,sale : parseInt(Math.random()*100)};
});


var svg = d3.select("body").append("svg").attr("width", 600) .attr("height", 600).append("g").attr("transform","translate( 50 , 20)");
var xordinal = d3.scale.ordinal().domain(d3.extent(jsonData,function(d){ return d.date;})).rangeRoundBands([0, 500]);
console.log(d3.extent(jsonData,function(d){ return d.date;}));
var ylinear = d3.scale.linear().domain([0,d3.max(jsonData,function(d){ return d.sale;})]).range([500,0]);

var xaxis =  d3.svg.axis().scale(xordinal).orient("bottom").ticks(30);
var yaxis =  d3.svg.axis().scale(ylinear).orient("left").ticks(10);
svg.append("g").call(xaxis).attr('transform', 'translate(0, 500)').append("text").text("日期").attr("transform","translate(500,0)");
svg.append("g").call(yaxis).append("text").text("销售额(万元/天)");

var line = d3.svg.line()
  .x(function(d) { return xordinal(d.date); })
  .y(function(d) { return ylinear(d.sale); })
  .interpolate('monotone');
var path = svg.append('path')
  .attr('d', line(jsonData));
