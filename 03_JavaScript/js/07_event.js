function test1(){
  alert("인라인 이벤트 모델");
}

const btn1 = document.getElementById("test2-1");

btn1.onclick = function(){
  alert("고전 이벤트 모델 확인");
}

document.getElementById("test2-2").onclick = function(){
  //버튼 내용 변경
  document.getElementById("test2-1").innerText = "이벤트 제거됨";
  //test2-1 이벤트 제거
  document.getElementById("test2-1").onclick = null;
}

document.getElementById("test2-3").onclick = function(){
  
  btn1.innerText = "이벤트 살아남";

  // 이벤트 핸들러 연결
  document.getElementById("test2-1").onclick = function(){
    document.getElementById("area").innerHTML=
    "<button id='test2-4'>만들어진 버튼 </button>";

    //기존에 없던 요소를 먼저 추가한 후 이벤트 핸들러를 연결해 주어야한다.
    document.getElementById("test2-4").onclick = function(){
      alert("만들어진 버튼이 클릭되었습니다.");
    }
  }
}

//#add-btn 추가버튼 누르면 버튼요소 생성

let count=1; //id의 이름변경을 위한 변수

document.getElementById("add-btn").onclick = function(){
  const addArea = document.getElementById("add-area");
  addArea.innerHTML +=
  '<div>'+
    '<div class="box" id="add-'+count+'"></div>'+
    '<input type="text" id="input-'+count+'">'+
    '<button id="btn-'+count+'">확인</button>'+
  '</div>';

  //생성된 확인 버튼에 onclick handler추가

  //변수 생성 
  for(let i=1; i<=count; i++){
    const btnId = "btn-"+i;
    const inputId = "input-" +i;
    const divId = "add-" +i;

    document.getElementById(btnId).onclick = function(){
      //input tag에 작성된 값 얻어오기

      //얻어온 값으로 샌성된 div 배경색 변경
      const bgColor = document.getElementById(inputId).value;

      document.getElementById(divId).style.backgroundColor = bgColor;
    }
  }
  count++;
}

let count2 = 1;
document.getElementById("add2").onclick = function(){

  document.getElementById("practice-area").innerHTML += 
  '<div>'+
    '<input type="text" id="input2-'+count2+'" size="10">'+
    '<button id="btn2-'+count2+'">변경</button>'+
  '</div>';

  for( let i= 1; i<=count2; i++){
    const btnId = "btn2-"+i;
    const inputId = "input2-"+i;
  
    document.getElementById(btnId).onclick = function(){
      const bgColor = document.getElementById(inputId).value;
      document.getElementById(btnId).style.backgroundColor = bgColor;
    }
  }
  count2++;
  
}

document.getElementById("test-btn").onclick = function(e){
  //매개변수 e : 발생한 이벤트에 관련된 모든 정보를 가지고 있는 객체
  console.log(e);

  console.log(e.target); // 이벤트가 발생한 요소
  
  // 요소직접 선택
  document.getElementById("test-btn").style.backgroundColor="red"; 

  // e.target 이용
  e.target.style.color = "white";

  //this 참조변수 == 현재이벤트가 발생한 요소 
  this.style.fontSize = "30px";
}

// 고전 이벤트의 문제점
document.getElementById("test-btn2").onclick = function(){
  alert("버튼이 클릭됨");
}

//새로운 이벤트 핸들러 작성
document.getElementById("test-btn2").onclick = function(){
  this.style.backgroundColor="yellow";
  //고전 이벤트 모델을 리스너 1 == 핸드러 1
  //-> 문제점 해결 : 표준 이벤트 모델 

}

//표준 이벤트 모델 
document.getElementById("standard-btn").onclick;
document.getElementById("standard-btn").addEventListener("click",function(){
  this.style.backgroundColor="orange"
});

document.getElementById("standard-btn").addEventListener("click",function(){
  alert("단점극복");
});

//요소에 다른 이벤트 리스너 동작부여
document.getElementById("standard-btn").addEventListener("mouseenter",function(e){
  e.target.style.color="white"
})

document.getElementById("standard-btn").addEventListener("mouseleave",function(){
  //mouseleave : 마우스가 요소에서 떨어졌을때
  this.style.color = "black"
})


//채팅창 만들기 
//입력버튼 클릭시 
document.getElementById("input-btn").addEventListener("click",inputChatting);

//input에서 enter입력시
document.getElementById("input-text").addEventListener("keyup",function(e){
  if(e.key == 'Enter'){
    inputChatting();
  }
});

// 공통동작 
function inputChatting(){
  //#input-test에 작성된 값을 읽어 #chat-window에 p태그 형식으로 추가 
  const input = document.getElementById("input-text");

  //입력된 값이 있을때에만 추가
  if(input.value.trim().length != 0){ 

    document.getElementById("chat-window").innerHTML 
    += '<p>'+input.value +'</p>';

    //overflow 발생시 스크롤 밑으로 고정
    //scrollHeight : 스크롤 영역의 길이 
    // scrollTop : 스크롤바의 위치 지정,조회
    console.log(document.getElementById("chat-window").scrollHeight);

    document.getElementById("chat-window").scrollTop
    = document.getElementById("chat-window").scrollHeight

    //input tag의 작성된 내용 삭제 
    input.value ="";

    input.focus();
  }
}