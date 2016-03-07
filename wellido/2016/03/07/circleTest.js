d3.select('head').append('script').attr('src', '//bigdata-mindstorms.github.io/d3-playground/wellido/2016/03/07/loadBootstrap.js');
container = d3.select('body').append('div').attr('class', 'container');

src = "http://uxsino.github.io/bmsui/wellido/static/picture/2016-02-02-175002.jpeg";
container.append('p').append('img').attr({
                                           height : 100,
                                           width  : 100,
                                           src : src,
                                           class : 'img-circle'
                                          });
