document.getElementById("arr-btn1").addEventListener("click", function(){
  const div = document.getElementById("arr-div");

  div.innerHTML="";

  //배열선언 
  const arr1 = new Array(3); //3칸짜리 배열 
  console.log(arr1);

  //배열 선언 2   
  const arr2 = new Array();
  console.log(arr2);

  //배열 선언3
  const  arr3 = [];
  console.log(arr3);

  //배열 선언 4
  const arr4 = ["딘딘", "은", "딘딘"]; //배열 선언 및 초기화
  console.log(arr4);

  //arr1에 각 요소 값 대입
  // 자료형의 구애를 받지 않음
  // 지정된 길이와 관계없이 추가가능 
  arr1[0] = "김밥";
  arr1[1] = 20;
  arr1[2] = true;
  arr1[3] = {"id" : "user01", "pw": "pass01"};
  console.log(arr1);

  //for문 출력 
  for(let i = 0; i<arr1.length; i++){
    div.innerHTML += "arr1["+ i + "]" + arr1[i] +"<br>"
  }
  div.innerHTML += "arr1[3].id : " +arr1[3].id+"<br>"
  div.innerHTML += "arr1[3]['id'] : " +arr1[3]['id']+"<br>"

  div.innerHTML += "<hr>"

  //JS for문 (배열/ 객체)
  //배열 
  //for ... of
  // for(꺼내서 저장한 변수 of 배열) -> java의 향상된 for문과 유사
  for(let item of arr1){

    if(typeof item != 'object'){
      div.innerHTML += item+"<br>"
    }else{
      //for ..in : 객체내 kwy값을 순차적으로 조회
      for(let key in item){
        div.innerHTML += key + " : " + item[key]+"<br>";
      }
    }
  }

  
})

document.getElementById("arr-btn2").addEventListener("click",function(){

  const arr = [];
  
  //push 
  arr.push("치킨");
  arr.push("피자");
  arr.push("초밥");
  arr.push("족발");

  //pop 
  console.log("꺼낸 요소의 값 : " + arr.pop());

  //indexOf 
  console.log("초밥 위치 : " + arr.indexOf("초밥"));
  console.log("피자 위치 : " + arr.indexOf("피자"));

  //toString 
  console.log(arr.toString());
  //join

  console.log(arr.join("--"));


  //난수배열 
  const arr2 = [];

  for(let i=0; i<10; i++){
    const ran = Math.floor(Math.random() * 100 + 1);
    
    //ran의 중복이 없을경우 배열에 추가
    if(arr2.indexOf(ran) == -1){
      arr2.push(ran);
    }else{
      i--;
    }
  }

  console.log(arr2);

  //오름차순 정렬
  // sort 정렬기준 default : 문자열 정렬기준
  console.log(arr2.sort(function(a,b){return a-b;}));

  console.log(arr2.reverse());
})
