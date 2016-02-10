user_issue_comment_count = function (user, issue, callback) {
  var api = 'https://api.github.com/repos/bigdata-mindstorms/d3-playground/issues/' + issue + '/comments?per_page=100';
  d3.json(api, function (e, d) { 
    if(!e) { 
      var count = 0;
      d.forEach(function (d) {
        if(d.user.login === user) {
          count++;
        }
      });
      callback(count);
    }
  });
}

// user_issue_comment_count('ontouchstart', 21, function(d) { console.log (d); });
