// ****** (경고) ******
// JS와 jQuery 요소 선택 방법에 따라서
// 뒤에 작성되는 코드 방식이 결정된다.

// JS방식 요소 선택 -> JS 코드 작성
// jQuery방식 요소 선택 -> jQuery 코드 작성
// (서로 섞어서 사용되어지지 못한다.)
// -> 한 줄에 JS, jQuery 혼용 X
// -> 서로 다른 줄에 각각 사용 O


// 태그 선택자 확인
$(document).ready(function(){

  // jQeury는 Javascript로 만들어진 라이브러리이다.
  // == jQuery는 JS 코드이다
  // == jQuery와 JS는 혼용이 가능하다.

  // [JS]
  const arr1 = document.getElementsByTagName("h5");
  console.log(arr1);

  // arr1은 h5 요소를 묶어둔 배열이기 때문에
  // for문으로 하나씩 접근하여 다루어야 한다.
  for( let h5 of arr1 ){
      h5.style.backgroundColor = "yellowgreen";
  }

  // h5 요소 글자색 흰색
  for( let h5 of arr1 ){
      h5.style.color = "white";
  }

  // p 요소 글자색 흰색
  for( let p of document.getElementsByTagName("p")  ){
      p.style.color = "white";
  }





  // [jQuery]
  const arr2 = $("p");
  console.log(arr2);

  $(arr2).css("backgroundColor", "skyblue");
  // jQuery 선택자를 이용하면 
  // 동시에 여러 요소를 선택하여 배열로 반환되는 경우에도
  // for문 없이 한번에 다룰 수 있다.

  $("p, h5").css("fontSize", "30px");
  // jQuery 선택자는 CSS 선택자 문법을 사용하기 때문에
  // 여러 요소도 한 번에 선택할 수 있다. 
});



// 클래스 선택자
$(function(){  // ready() : 문서 로딩이 완료된 후 실행

  // [JS]
  // 클래스가 item인 요소의 글자색을 "orange"로 변경
  const arr = document.getElementsByClassName("item"); 
  
  for( let h3 of arr){
      h3.style.color = "orange";
  }


  // [jQuery]
  // 클래스가 select인 요소의 배경색을 "gray"로 변경
  $(".select").css("backgroundColor", "gray");

  // 클래스 item, select를 모두 가진 요소의 글자 크기를 30px로 변경
  $(".item.select").css("font-size", "30px");

  // css 표기법 : font-size
  // JS 표기법 : fontSize
  // jQuery 표기법 : font-size  또는  fontSize

});




// 아이디 선택자

$(document).ready(function(){

  // $(요소).on("이벤트", 이벤트 핸들러) : 지정된 요소에 이벤트 리스너를 추가
  // == 요소.addEventListener() 와 같은 동작
  // 단 요소 선택 방법에 차이가 있음.

  $("#input1").on("input", function(){

      // input 태그 값 얻어오기
      //console.log( this.value ); // JS 방식
      //console.log( $(this).val() ); // jQuery 방식
      
      // 정규표현식 작성
      const regExp = /^[A-Z][a-z\d\!\@\#]{7,19}$/;

      if( regExp.test( $(this).val() )  ){
          // innerText == text()

          // JS
          //document.getElementById("result").innerText = "유효";

          // jQuery
          $("#result").text("유효");
          $("#result").css("color", "green");
          
      }else{
          $("#result").text("무효");
          $("#result").css("color", "red");
      }
  });

});


//기본속성 선택자 
$(document).ready(function(){
  //확인버튼이 클릭 되었을때
  $("#check").on("click",function(){

    //name이 team인 input요소 중 체크된 요소를 변수에 저장
    const team = $("input[name='team']:checked")
    
    //체크된 요소의 값을 얻어오는 방법 
    console.log(team.val());

    if(team.length == 0){
      alert("팀을 선택해 주세요")
    }else{
      alert(team.val() + "팀을 선택하셨습니다.")
    }
  })
})