var 销售额 = [200,178,213,330,150,300,295,177,260,340,250,322];
var 月份 = [1,2,3,4,5,6,7,8,9,10,11,12];

var blank = {top:20,right:20,bottom:20,left:50};
var svg = d3.select("body").append("svg").attr("width", 600) .attr("height", 600).append("g").attr("transform",'translate(' + blank.left + ',' + blank.top + ')');

var xordinal = d3.scale.ordinal().domain(月份).rangeRoundBands([0, 500]);
var ylinear = d3.scale.linear().domain([0,d3.max(销售额)]).range([500,0]);


var xaxis =  d3.svg.axis().scale(xordinal).orient("bottom");
var yaxis =  d3.svg.axis().scale(ylinear).orient("left");
svg.append("g").call(xaxis).attr('transform', 'translate(0,' + 500+ ')');
svg.append("g").call(yaxis);

var rects = svg.selectAll("rect").data(销售额).enter().append("rect").attr("x", function(d,i){ return xordinal(i)+40; } ).attr("y",function(d,i){ return ylinear(d); }).attr("width", xordinal.rangeBand() - 10 ).attr("height", function(d,i){ return 500 - ylinear(d) ; });
