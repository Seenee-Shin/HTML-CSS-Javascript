$('#checkall').on('change',function(){
  if($('#checkall').prop('checked')){
    $('.all').prop('checked',true)
    $('.title').prop('checked',true)
  } else{
    $('.all').prop('checked',false)
    $('.title').prop('checked',false)
  }
})

$('#checka').on('change',function(){
  if($('#checka').prop('checked')){
    $('.a').prop('checked',true)
    $('#checka').prop('checked',true)
  }else{
    $('.a').prop('checked',false)
    $('#checka').prop('checked',false)
  }
})


$('#checkb').on('change',function(){
  if($('#checkb').prop('checked')){
    $('.b').prop('checked',true)
    $('#checkb').prop('checked',true)
  }else{
    $('.b').prop('checked',false)
    $('#checkb').prop('checked',false)
  }
})

$('.a').on('click',function(){
  if($('.a:checked').length > 0 ){
    $('#checka').prop('checked',true)
  }else{
    $('#checka').prop('checked',false)
  }
})

$('.b').on('click',function(){
  if($('.b:checked').length > 0 ){
    $('#checkb').prop('checked',true)
  }else{
    $('#checkb').prop('checked',false)
  }
})

$('.title').on('change',function(){
  if($('#checka').prop('checked')&&$('#checkb').prop('checked')){
    $('#checkall').prop('checked',true)
  }else{
    $('#checkall').prop('checked',false)
  }
})

