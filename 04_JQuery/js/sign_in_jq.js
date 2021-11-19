$('#id').on("blur",function(){
  const regex = /^[a-z][a-zA-Z\d\-\_]{5,13}$/

  if($("#id").val().trim().length == 0){
    $("#id").removeClass()
    $("#id").removeAttr("class")
    return
  }

  if(regex.test($('#id').val())){
    $('#id').addClass("validation")
    $('#id').removeClass("invalidation")
  }else{
    $('#id').addClass("invalidation")
    $('#id').removeClass("validation")
  }

})

$('#pw2').on("input",function(){
  const regex = /^[a-z][a-zA-Z\d\-\_]{5,13}$/

  if($("#pw").val().trim().length == 0){
    alert("비밀번호를 입력해주세요")
    $('#pw').focus()
  }
  
  if($("#pw2").val().trim().length == 0){
    $('#password_check').text('')
    return
  }

  if($('#pw2').val() == $('#pw').val()){
    $('#password_check').text('비밀번호 일치').css('color','green')
  }else{
    $('#password_check').text('비밀번호 불일치').css('color','red')
  }

})


$('#name').on("change",function(){
  const regex = /^[가-힣]{2,5}$/

  if($('#name').val().trim().length == 0){
    $('#name_check').text('')
    return
  }
  if(regex.test($('#name').val())){
    $('#name_check').text('정상입력').css('color','green')
  }else{
    $('#name_check').text("한글만 입력하세요").css('color','red')
  }
})

function signUpVaildate(){
  const gender = $("input[name='gender']:checked")
  if(gender.length == 0){
    alert("성별을 선택해주세요.")
    return false
  }

  const regex = /^[0][0-9]{1,2}-[0-9]{3,4}-[0-9]{4}/
  if(!regex.test($('#email').val())){
    alert("전화번호의 형식이 올바르지 않습니다.")
    return false
  }
}