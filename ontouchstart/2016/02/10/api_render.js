api_render = function (api) {
  function render(d) {
    console.log(d);
    d3.select('body')
      .append('ol')
      .selectAll('li')
      .data(d)
      .enter()
      .append('li')
      .append('pre')
      .html(function (d) { 
        return js_yaml.dump(d);
      });
  }
  d3.json(api, function (e, d) {
    if(!e) {
      render(d);
    }
  });
}

