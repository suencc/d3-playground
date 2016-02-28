---
layout: d3
---

# 2016/02/28

![Tiger](Tiger.jpg)

<script>
var color = d3.scale.linear()
    .domain([1, 500])
    .range(["red", "blue"]);
d3.range(500).forEach(function (i) {
  d3.select('body').append('div')
    .style('background', color(i))
    .style('width', '100%')
    .style('height', '50px')
})
</script>
