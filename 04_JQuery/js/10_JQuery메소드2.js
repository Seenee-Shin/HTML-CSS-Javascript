//remove, detach empty

//#test hover 이벤트 추가 
//$(선택자).hover(function(){},function(){]})
//  -> 매개변수 2개 필요 1. 마우스가 들어왔을때, 2.마우스가 영역밖으로 나갔을때 

$('#test, .test3').hover(function(){
  //마우스가 영역 안으로 들어 왔을 때(mouseenter) 
  $(this).css("backgroundColor","lime")
  $(this).children("span").text("HI")
  
},function(){
  //마우스가 영역밖으로 나갔을 때 (mouseLeave)
  $(this).css("backgroundColor",'yellowgreen')
  $(this).children("span").text("안녕")
})

//remove 버튼 클릭시 
$('#remove').on("click",function(){
  // console.log ($('#test').remove())
  //화면에서 제거 , 실제로는 반환 
  //완전 제거 : undefined

  const temp = $('#test').remove()

  $('#div2').append(temp) //div2의 자식으로 temp추가

})

//detach 버튼 클릭시 
$('#detach').on("click",function(){

 // 요소와 이벤트 모두 잘라내기
  const temp = $('#test').detach()

  $('#div2').append(temp) //div2의 자식으로 temp추가

})

//empty 버튼 클릭시 
$('#empty').on("click",function(){
//자식요소 비우기 

  const temp = $('#test').empty()
})


//clone
$('#clone').on('click',function(){
  const clone = $("#div3").children().eq(0).clone(true) //#div3 c첫번째 자식 요소를 복제
  //$("선택자").eq(index) : 다수의 요소 중 특정 인덱스 번째 요소 선택  
  $('#div3').append(clone) 
  
})

/* 
1. 배열 또는 다수의 요소를 순차 접근하는 방식 
$.each(object , function([index,item]){ this }) */

$(document).ready(function(){
  //객체배열 만들기 
  const arr = [
    {name : "James" , age : 35},
    {name : "Michel" , age : 25},
    {name : "Tom" , age : 28}
  ] 

  $.each(arr,function(index,item){
    console.log(this.name)
    
    console.log(index +  "번째 요소의 age: " + arr[index].age)
    console.log(index +  "번째 요소의 age: " + item.age) //item 현재 접근중인 요소 

  })
})


/*2. 다수의 요소를 순차 접근하는 방식 (
$("선택자").each(function([index,item]){}) */
$(function(){
  $("li").each(function(index, item){
    //item == this 
    $(item).addClass("highlight-"+index)
  })
})