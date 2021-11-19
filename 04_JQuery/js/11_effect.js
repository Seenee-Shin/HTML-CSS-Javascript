//show() : display : none 제거
$('#show-btn').on('click', function(){
  $('#img1').show(500)
})

//hide() : display : none 추가
//너비 높이 0 수렴
$('#hide-btn').on('click', function(){
  $('#img1').hide(500)
})

//fadeIn
$('#fadeIn-btn').on('click', function(){
  $('#img2').fadeIn(500)
})

//fadeOut
$('#fadeOut-btn').on('click', function(){
  $('#img2').fadeOut(500)
})

//slideDown 
$('#slideDown-btn').on('click', function(){
  $('#img3').slideDown(500)
})

$('#slideUp-btn').on('click', function(){
  $('#img3').slideUp(500)
})

// 토글 스위치
$("#toggle").on("click", function() {
  if ($("#img4").css("display") == "none") {
      $("#img4").show(1000);
  } else $("#img4").hide(1000);
});

// toggle() 메서드
$("#toggle2").on("click", function() {
  $("#img4").toggle(1000);
})

//아코디언 메유 
$('.title').on("click",function(){
  const next = $(this).next() //  tilte의 다음요소 
  if(next.css("display") == "none"){
    $(this).siblings(".content").slideUp(500)
    // 형제요소중 .content가 포함된 요소를 slide up으로 닫기
    next.slideDown(500)
    //한 요소에 이펙트 요소가 중복 되는 경우 제일 최근의 이펙트가 적용 
  }else{
    next.slideUp(500)
  }
})