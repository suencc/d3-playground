jsonArry = [];
jsonArry.push("保时捷");
jsonArry.push('兰博基尼');
jsonArry.push("英飞尼迪");
console.log(jsonArry);

var jsObj = JSON.stringify(jsonArry);

d3.select("body").append("p").html(jsObj);
