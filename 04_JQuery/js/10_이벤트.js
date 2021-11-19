//focus
$("#focus-blur").on("focus",function(){
  //input태그에 focus되었을 때 동작 지정
  $(this).css("backgroundColor","pink")
})

$("#focus-blur").on("blur",function(){
  //input태그에 blur되었을 때 동작 지정
  $(this).css("backgroundColor","initial")
  //initial : 초기값
})


//change1 
$('#change1').on("change", function(){
  console.log("change1의 값이 번경되었습니다.")
  console.log($(this).prop("checked"))
})

//change2 
$('#change2').on('change',function(){
  
  console.log("change2의 값이 번경되었습니다.")
  console.log($(this).val())
})

//select 
//#select의 내용에 블럭이 설정된 경우 동작
$('#select').on('select',function(){
  $(this).css("background","springgreen")
})

//on 메소드 추가 사용법
// 띄어쓰기로 구분하여 다수 작성 
$('#on-test').on('keyup blur click paste',function(){

  //'keyup blur click paste' == input  입력과 관련된 모든 동작 발생시 
  console.log($(this).val())
})

$('#input-content').on('input',function(){
  // 글자 수 카운팅 변수 저장 
  let count = ($(this).val().length)
  $('#counter'). text(count)

  if(count >= 150){
    count = 150;
    //150글자 작성시 , counter color = red
    $('#counter').css("color","red")
      // 150글자 초괴 시 150글자 까지의 무자열을 잘라내여 #input-content의 value로 대입
      $(this).val($(this).val().substr(0,150))
      //문자열.sbustr(시작인덱스 , 종료인덱스) : 시작~ 종료인덱스 미만의 문자열 반환
  } else if(count >= 130){
    //130글자 이상 작성시 , counter color = orangered
    $('#counter').css("color","orange")
  } else if(count >= 100){
     //100글자 이상 작성시 , counter color = orange
    $('#counter').css("color","gold")
  }else{
    $('#counter').css("color","black")
  }
  
})