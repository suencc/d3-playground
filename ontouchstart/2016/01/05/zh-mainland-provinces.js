title = "中国大陆地图"
d3.select('title')
  .html(title);
body = d3.select('body');
body.append('h1')
  .html(title);

function change_color(color) {
  return function () {
    d3.select(this).attr('fill', color);
  };
}

function load(e, d) {
  console.log(d);
  svg.append("g")
        .attr("class", "map")
        .append("g")
        .attr("class", "mainland")
        .selectAll("path")
        .data(topojson.feature(d, d.objects.provinces).features)
        .enter()
        .append("path")
        .attr("d", path)
        .attr("id", function(d) { return d.id; })
        .attr("class", "province")
        .attr("fill", "#d62728")
        .attr("stroke", "black")
        .attr("stroke-width", "0.35")
        .on('mouseover', change_color('#1f77b4'))
        .on('mouseout', change_color('#d62728'));
}

width = 800;
height = 600;
svg = d3.select('body').append("svg")
  .attr("width", width)
  .attr("height", height)
  .attr("preserveAspectRatio", "xMidYMid")
  .attr("viewBox", "0 0 " + width + " " + height);


projection = d3.geo.mercator()
  .center([116,39])
  .scale(600);

path = d3.geo.path()
  .projection(projection);

// add grey color if no values
var color = function(i){
    if (i==undefined) {return "#cccccc"}
    else return colorScale(i)
}

// BACKGROUND
svg.append("g")
    .attr("class", "background")
    .append("rect")
    .attr("class", "background")
    .attr("width", width)
    .attr("height", height)
    .attr("fill", "#aec7e8")
    .attr("stroke", "black")
    .attr("stroke-width", "0.35");

d3.json('zh-mainland-provinces.topo.json', load);