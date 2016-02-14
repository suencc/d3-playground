function add_radio(selection, name, checked , value) {
  var radio_sel = selection.append('input').attr('type', "radio").attr('name',name).attr('value',value);

  console.log(checked);

  if(checked == "true"){
    console.log(value +' checked true');
    radio_sel.attr('checked',true);
  }

}

d3.select('body').append('p').html('性别：');
add_radio(d3.select('body').append('p').html('男：'), "sex", "true", "male");
add_radio(d3.select('body').append('p').html('女：'), "sex", "false", "female");
