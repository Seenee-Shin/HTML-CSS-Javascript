// 1. id로 요소 접근하기 
function accessId(){
  const div1 = document.getElementById("div1");

  //div 배경색을 얻어와 변수에 저장
  const bgColor = div1.style.backgroundColor;

  console.log(bgColor);
  //문자열 비교시에도 비교연산자 사용 java = equlse
  if(bgColor == "red"){
    div1.style.backgroundColor = "yellow";

  }else if (bgColor == "yellow"){
    div1.style.backgroundColor = "blue"
  } else{
    div1.style.backgroundColor = "red"
  }

}

function accessClass(){

  const arr = document.getElementsByClassName("div2");
  console.log(arr);

  //각배열요소의 배경색 지정
  arr[0].style.backgroundColor = "lightblue";
  arr[1].style.backgroundColor = "lightgreen";
  arr[2].style.backgroundColor = "lightyellow";

  arr[0].innerHTML= "신"
  arr[1].innerHTML= "희"
  arr[2].innerHTML= "연"
}

function accessTagName(){
  const arr = document.getElementsByTagName("li");

  for(let i=0; i<arr.length; i++){
    arr[i].style.backgroundColor = "rgb(130,220,"+(i*50+50)+")";
  }
}

function accessName(){
  const div4 = document.getElementById("div4");
  const hobbyList = document.getElementsByName("hobby");

  div4.innerHTML = " ";

  let count = 0;

  //얻어온 checkbox 중 체크된 요소만 값 출력하기
  for(let i=0; i<hobbyList.length; i++){
    if(hobbyList[i].checked){
      //.checked : check가 된 상태를 true로 반환 
      div4.innerHTML += hobbyList[i].value + " ";
      //value : input요소의 값을 반환 

      count++;
    }
  }
  div4.innerHTML += "<br><br> 개수 :" + count;
}

function accessCss(){
  const el1 = document.querySelector("#div5");
  el1.style.backgroundColor = "orange";

  const el2 = document.querySelectorAll(".cls");
  for( let i = 0; i < el2.length; i++){
    el2[i].style.color = "blue";
  }

  const el3 = document.querySelector(".cls>span");
  el3.style.fontSize = "30px"
}

function testFn(){
  const num1 = document.getElementById("num0").value;

  console.log(Number(num0) +100);
}


// 예제
function cal(num){
  const num1 = Number( document.getElementById("num1").value);
  const num2 = Number(document.getElementById("num2").value);
  const result = document.getElementById("result");

  let re=0;

  switch(num){
    case 1:re = num1 + num2; break;
    case 2:re = num1 - num2; break;
    case 3:re = num1 * num2; break;
    case 4:re = num1 / num2; break;
    case 5:re = num1 % num2; break;
  }
  result.innerHTML = re;
}
