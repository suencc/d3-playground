user_issue_comments = function (user, issue) {
  var api = 'https://api.github.com/repos/bigdata-mindstorms/d3-playground/issues/' + issue + '/comments?per_page=100';
  d3.json(api, function (e, d) { 
    if(!e) { 
      d3.select('body')
        .append('p')
        .append('a')
        .attr({ href : 'https://github.com/' + user })
        .html('Comments by ' + user);
      d3.select('body')
        .append('p')
        .append('a')
        .attr({ href : 'https://github.com/bigdata-mindstorms/d3-playground/issues/' + issue})
        .html('on issue ' + issue);
      d.forEach(function (d) {
        if(d.user.login === user) {
          console.log(d.body);
          d3.select('body')
            .append('pre')
            .html(d.body)
            .style({'border-left' : '5px solid #ccc', padding: '1em'});
          d3.select('body')
            .append('div')
            .html(marked(d.body));
        }
      });
    }
  });
}

// user_issue_comments('ontouchstart', 21);
