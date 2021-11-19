function clickCount(){
  const div1 = document.getElementById("div1")

  //value 는 input태그의 고유 속성이기 때문에 다른 태그에 쓸수 없다

  div1.innerText = Number(div1.innerText) + 1;
}

function clickCount2(btn){
  //btn==함수가 호출한 요소
  btn.innerText = Number(btn.innerText) + 1;
}

//익명함수
document.getElementById("btn1").addEventListener("click",function(){
  this.style.backgroundColor = 'yellow'

  printConsole(function(i){
    return i + "번째 출력";
  })

  printConsole(function(i){
    return (11-i) + "번째 출력"
  })
})

function printConsole(fn){
  for(let i =1; i<= 10; i++){
    console.log(fn(i));
  }
}


//즉시 실행 함수

//일반 함수
function test1(){ //선언
  console.log("즉시 실행함수가 아님") //정의
}
test1(); //호출 

var str = "전역변수";
// var는 중복사용 가능 
(function(){
  var str = " 변경된 전역변수";
  console.log(str)
})()

console.log(str)

//화살표 함수
//익명함수와 표기법 차이
//익명함수 
document.getElementById("btn2").addEventListener("click", function(){
  alert("익명함수")
})

//화살표함수
document.getElementById("btn3").addEventListener("click",()=>{
  alert("화살표 함수")
})

document.getElementById("btn4").addEventListener("click",e =>{
  e.target.style.backgroundColor = "yellow"
})

//화살표 함수 작성법 4 (return , {} 생략)

//return 생략
document.getElementById("btn5").addEventListener("click",() => {
  
  //익명함수
  printConsole2(function(num){
    return num*2
  })

  //화살표 함수
  printConsole2((num)=> num*3)


  //화살표 함수 (),{},return 모두생략
  printConsole2 (num => num*4)

  //return, {} 생략 불가능 한 경우 : return 값이 객체
  printConsole2(num => {return {id : "user01", pw : "pw01"}})
})


function printConsole2(Fn2){
  console.log(Fn2(2))
}