function add_radio(selection, name, checked , value) {
  selection.append('input').attr('type', "radio").attr('name',name).attr('value',value).attr('checked',checked)

}


d3.select('body').append('p').html('性别：');
add_radio(d3.select('body').append('p').html('男：'), "sex", "checked", "male");
add_radio(d3.select('body').append('p').html('女：'), "sex", "", "female");
