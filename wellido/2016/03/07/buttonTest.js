d3.select('head').append('script').attr('src', '//bigdata-mindstorms.github.io/d3-playground/wellido/2016/03/07/loadBootstrap.js');
container = d3.select('body').append('div').attr('class', 'container');
container.append('p').append('button').attr('class','btn btn-primary btn-lg');
container.append('p').append('button').attr('class','btn btn-default');
container.append('p').append('button').attr('class','btn btn-primary btn-sm');
container.append('p').append('button').attr('class','btn btn-default btn-xs');
