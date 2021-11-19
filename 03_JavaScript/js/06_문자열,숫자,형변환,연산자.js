function stringTest(){
  const div1 = document.getElementById("div1");

  //함수가 호출 될때 마다 #div1 이전내용 삭제 
  div1.innerHTML="";

  const str1 = "Hello World!";

  div1.innerHTML += "str1.length : " + str1.length + "<br>";
  //java: str.lenght()  JS:str1.lenght
  
  //대소문자 변환
  div1.innerHTML += "str1.toUpperCase() : " + str1.toUpperCase() + "<br>";
  div1.innerHTML += "str1.toLowerCase() : " + str1.toLowerCase() + "<br>";
  
  //문자여에서 특정 index에 위치한 문자 반환
  div1.innerHTML += "str1.charAt(0) : " + str1.charAt(0) + "<br>";
  
  div1.innerHTML += "<hr>"
  //for문을 이용하여 str1에 저장된 문자 하나씩 출력
  for(let i =0; i<str1.length ; i++){
    div1.innerHTML += "str1.charAt("+i+") :" + str1.charAt(i) + "<br>";
  }

  //indexOf("문자열")
  //문자열에서 특정 문자열의 시작 인덱스를 찾아 반환
  div1.innerHTML += "<hr>";
  div1.innerHTML += "앞에서 부터 처음 검색된 w의 인덱스 : " + str1.indexOf("W") + "<br>";
  div1.innerHTML += "앞에서 부터 처음 검색된 world의 인덱스 : " + str1.indexOf("World") + "<br>";
  div1.innerHTML += "앞에서 부터 처음 검색된 apple의 인덱스 : " + str1.indexOf("apple") + "<br>";
  // -1 : 알치하는 값 없음 

  //반대로 검사를 진행하는 lastIndexOf() 도 있음

  //substring(시작index, 종료index)
  //문자열을 시작 인덱스 이상, 종료 인덱스 미만까지 잘라 반환
  div1.innerHTML += "<hr>";
  div1.innerHTML += "str1.substring(0,5) : " + str1.substring(0,5) + "<br>";  
  div1.innerHTML += "str1.substring(6,11) : " + str1.substring(6,11) + "<br>";  

  //split (구분자) 
  //문자령을 특정 구분자로 장아서 배열로 반환

  div1.innerHTML += "<hr>";

  const arr = str1.split(" "); //듸어쓰기를 구분자로 잡아 배열 생성
  div1.innerHTML += "arr[0] :" + arr[0] + "<br>"  
  div1.innerHTML += "arr[1] :" + arr[1] + "<br>"  

}

function numberTest(){

  const div2 = document.getElementById("div2");

  //이전 내용 모두 삭제
  div2.innerHTML = "";

  //infinity 확인
  div2.innerHTML += "무한(Infinity) 확인 -> 5 / 0 = " + 5/0;

  const num1= 10;
  const num2 = 0;

  if((num1/num2)==Infinity){
    div2.innerHTML = "0으로 나눌 수 없습니다. <br>";
  }else{
    div2.innerHTML = (num1/num2) + "<br>";
  }

  div2.innerHTML += "<hr>";
  //NaN(Not a Number) 확인
  //숫자 * 문자 등 숫자 연산시 숫자가 아닌 값이 포함되면 발생 
  div2.innerHTML += "aaa * 10 = " + ("aaa"*10) + "<br>";
  
  const num3 = 5;
  let num4; // undefined 
  
  if (!isNaN(num3*num4)){
    div2.innerHTML += "num3 * num4 = " + num3 * num4 + "<br>";
  }else{
    div2.innerHTML += "num4에 값을 입력되지 않았습니다.<br>";
  }
  //JAVA : 0으로 나누기, 숫자가아닌 연산은 예외로 처리
  //JS : 예외처리가 없으므요 infinity와 nan으로 처리
  
  //Math 내장 객체
  div2.innerHTML += "<hr>";
  
  div2.innerHTML += "난수 발생 -> Math.random() : " + Math.random() + "<br>";
  //범위는 JAVA와 같이 0~1사이의 난수 
  
  div2.innerHTML += "올림 -> Math.ceil(숫자) : " + Math.ceil(10.1) + "<br>";
  div2.innerHTML += "내림 -> Math.floor(숫자) : " + Math.floor(10.9) + "<br>";
  div2.innerHTML += "반올림 -> Math.round(숫자) : " + Math.round(10.9) + "<br>";
  div2.innerHTML += "버림 -> Math.trunc(숫자) : " + Math.trunc(-10.9) + "<br>";

}

//문자열 -> 숫자 형변관 확인하기 
function castingTest(){
  
}