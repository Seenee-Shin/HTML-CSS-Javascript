//1단계 
$("#btn1").on("click",()=>{
  $("#div1").css("backgroundColor",$("#input1").val())
})

//2단계
$("#btn2").on("click",()=>{

  const colorList =  $(".step2 > .area")
  const colorInputList = $(".step2 > .input-color")

  console.log(colorList);
  console.log(colorInputList);

  for(let i=0; i<colorList.length; i++){
    $(colorList[i]).css("backgroundColor",$(colorInputList[i]).val())
  }

})

//3단계
//input3 = 배열 js안됨
$(".input3").on("input",function(){
  // const input3 = $(".input3")
  // const div3 = $(".div3")

  // for(let i =0; i<div3.length; i++){
  //   $(div3[i]).css("backgroundColor",$(input3[i]).val())
  //   $(input3[i]).css("border-color",$(input3[i]).val())

  // }

  //js+ Jquery
  // this.previousElementSibling.style.backgroundColor = $(this).val()
  // $(this).css("border-color",$(this).val())

  //JQeury
  $(this).prev().css("backgroundColor",$(this).val())
  //입력이벤트가 발생한 현재요소를 jQuery 선택자로 선택 
  /// prev() : 선택된 요소의 이전 요소를 jQurey  선택자로선택

})