const stdList = [];


//입력버튼 클릭 시 동작 
document.getElementById("input-student").addEventListener("click",function(){
  //class가 in인 요소 모두 얻어오기
  const inputArr = document.getElementsByClassName("in");
  
    //(추가)student 객체 생성

    const std = new Student(inputArr[0].value, inputArr[1].value, inputArr[2].value,
      inputArr[3].value,inputArr[4].value,inputArr[5].value)



  //tr태그 요소 생성
  const tr = document.createElement('tr') //화면상에 나타나지 않음

  let sum =0; //합계 저장용 변수
  let index = 0; //일반 for문의 i역할

  //각 input 태그의 value얻어오기 (for of)
  for (input of inputArr){

    //input 태그에 값이 입력되지 않은 경우
    if(input.value.trim() == ""){
      //trim : 좌우 공백 제거
      //경고 메세지 , 미입력 input태그에 focus옮기기
      alert("값을 모두 입력해 주세요");
      input.focus() // focus : 그 부분 강조


      return; //반환 값의 반환 but 없으면 그냥 반환
    }
  
  //td 태그 요소를 생성 , textNode로 input태그의 값을 집어 넣기 
    const td = document.createElement("td");
    const text = document.createTextNode(input.value);
    td.appendChild(text); //속도 면에서 append 보다 빠름


    //생성된 td요소를 3번에서 생성한 tr요소에 하위로 추가
    tr.appendChild(td);
    
    //sum에 점수 누적
    if(index > 1){
      sum += Number(input.value)
      //input에 value는 모두 문자열이기 때문에 숫자로 형변환
    }

    //input 태그에 남아 있는 값 제거 
    input.value = "";
    index++;
  }
  //평균 td요소, 점수 textNode 생성 후 tr에 추가
  const td = document.createElement("td")
  const textNode = document.createTextNode((sum /4).toFixed(1))

  //textNode를 td에 추가
  td.appendChild(textNode);
  
  //textNode가 추가된 td를 tr에  추가
  tr.appendChild(td)

  //tr,td를 table에 추가 
  document.getElementById("view-student").appendChild(tr) ;

    // stdList에 생성된 Student 객체 끝으로 밀어넣기
    stdList.push(std)
});


//나이 오름차순 버튼이 클릭 되었을 때의 동작 
document.getElementById("age-asc-btn").addEventListener("click",function(){
  //1.배열 깊은 복사  : 원본 훼손없이 새로운 배열 생성 
  // 배열명.slice([시작인덱스,길이]) : 배열을 길이만큼 잘라내여 새로운 배열 생성

  // const arr = [1,2,3,4,5];
  // const copy = arr.slice(0,3);

  const copyList = stdList.slice();
  copyList.sort(ageAsc);
  //console.log(copyList)

  createView(copyList);
  
})

//나이 내림차순 버튼 
document.getElementById("age-desc-btn").addEventListener("click", function(){
  const copyList = stdList.slice() //깊은복사 
  copyList.sort(ageDesc) //나이 내림차순 정렬
  createView(copyList)

})

//view-student의 내용을 모두 삭제 -> 전달받은 학생 리스트 출력
function createView(list){
  const view = document.getElementById("view-student") //tbody

  //view내부 내용 제거
  view.innerHTML="";

  //전달 받은 학생 리스트(list)를 반복 접근 
  for(let std of list){
    //tr요소 생성
    const tr = document.createElement("tr");

    //std(Student 객체) 의 속성을 반복접근
    for (let key in std){
      
      console.log(key + "/" + typeof key)

      if(typeof std[key] != "function"){ // value가 함수가 아닌 경우 실행
  
        //td 요소를 만들어 얻어온 객체속성을 textNode로 만들어 추가 
        const td = document.createElement("td");
        const textNode = document.createTextNode(std[key]);
        td.appendChild(textNode);
  
        //만들어진 td요소를 tr에 하위로 추가
        tr.appendChild(td);

      }
    } //for문 종료

    //td 요소를 만들어 평균을 textNode로 만들어 추가 
    const td = document.createElement("td");
    const textNode = document.createTextNode(std.getAvg());
    td.appendChild(textNode);

    //만들어진 td요소를 tr에 하위로 추가
    tr.appendChild(td);
    view.appendChild(tr)
  }
  

}



//나이 오름차순 정렬 기준을 구하기 위한 함수
function ageAsc(std1,std2){
  return std1.age - std2.age
  //음수 0은 그대로, 양수면 인접 두 요소의 자리를 바꿈
}

//나이 내림차순 정렬 기준을 구하기 위한 함수
function ageDesc(std1,std2){
  return std2.age - std1.age 
  //음수 0은 그대로, 양수면 인접 두 요소의 자리를 바꿈
}
