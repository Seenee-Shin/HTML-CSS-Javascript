//node확인하기 

document.getElementById("btn1").addEventListener("click", function(){
  const nodeList = document.getElementById("test").childNodes;

  //자식 노드 리스트 
  console.log(nodeList);
  // 부모 노드
  const li1 = document.getElementById("li1");
  console.log(li1.parentNode);
  
  //append 마지막 자식 요소로 추가
  li1.parentNode.append("추가된 태그");


  //first child : 첫번쨰 자식 노드 
  const ul = document.getElementById("test");
  console.log(ul.firstChild); //tect
  console.log(ul.childNodes[3]); // li 1번

  //버튼이 클릭 될 때 <li>3번</li> 태그에 내용 추가
  ul.childNodes[9].append("내용추가!");

  //lastChild
  console.log(ul.lastChild);


  //previousSibling: 이전 형제 노드
  // nextSibling : 다음 형제 노드 
  console.log(ul.childNodes[5].previousSibling.previousSibling);

  console.log(ul.childNodes[5].parentNode.nextSibling.nextSibling.childNodes);


})

// 새로운 노드 생성 및 추가

// 1. 추가 버튼 노드 얻어오기
//console.log(  document.getElementById("div1").childNodes[1].childNodes[3]   );

// 추가 버튼을 변수에 저장
const addBtn = document.getElementById("div1").childNodes[1].childNodes[3];
//console.log(addBtn);

// 2. 추가 버튼이 클릭되었을 때에 대한 이벤트 작성
addBtn.addEventListener("click",addChild); 

//div1 자식요소 추가 
function addChild(e){
      // 3. 화면을 구성하는 요소(노드)를 만들어서 조립

    // ** createElement : 요소 노드 생성
    // 1) 감싸고있는 div 생성
    const div = document.createElement("div");
    // (주의) JS상에 요소가 생성, 화면에 배치되지 않은 상태

    //input 생성
    const input = document.createElement("input");

    //input 요소에 type, name 속성 세팅 
    //setAttribute("속성명","속성값") : 해당 요소에 속성추가 
    input.setAttribute("type","text");
    input.setAttribute("name","div1-input");

    //추가 button 생성
    const add = document.createElement("button");
    add.setAttribute("type","button");

    //createTextNode("문자열"):TextNode 생성
    // .appendChild(노드); : 노드를 부모의 마지막 자식으로 추가 -> 요소를 하나씩 추가 
    // .append(노드 or 문자열); 노드or문자열을 마지막 자식으로 추가 -> 한번에 여러 요소 추가가능 
    document.createTextNode("추가");
    add.appendChild(document.createTextNode("추가"));

    add.addEventListener("click", addChild);

    //삭제 button 생성
    const rmv = document.createElement("button");
    rmv.setAttribute("type","button");

    //제거버틍 클릭시 부모요소 제거 함수 호출하는 속성 셋팅
    rmv.setAttribute("onclick","removeParent(event);");


    rmv.appendChild(document.createTextNode("제거"));

    // 4. 알맞은 위치에 조립된 요소를 추가
    // div.appendChild(input);
    // div.appendChild(add);
    // div.appendChild(rmv);
    div.append(input,add,rmv);
    
    // 이벤트가 발생한 요소의 부모의 부모 요소의 마지막 자식으로 div 추가
    e.target.parentNode.parentNode.append(div);
}

//현재 요소의 부모요소를 제거하는 함수 

// 매개변수로 이벤트 발생 객체 event 전달 (event -> e)
// 매개변수로 이벤트가 발생한 요소 자체를 전달하는 방법 (this) 
function removeParent(e){
  // console.log(e.target); // 이벤트가 발생한 요소 자체

  // 이벤트가 발생한 요소의 부모 노드 선택 
  console.log(e.target.parentNode);

  // removeChild (노드) : 해당 자식노드 1개 제거
  // e.target.parentNode.removeChild(e.target.parentNode.childNodes[0]);

  // 요소.remove() : 해당 요소 제거
  e.target.parentNode.remove();
}


//Node와 Element의 차이점
document.getElementById("test2-btn").addEventListener("click", function(){
  const test2 = document.getElementById("test2");

  console.log(test2.childNodes);
  // test2의 childNode(노드)를 모두 반환

  //내용이 4인 요소 선택 
  console.log(test2.childNodes[7]);

  //----------------------------------

  //test2의 "자식요소"를 모두 반환 (HTML 컬렉션)
  // HTML요소만 모여있음
  console.log(test2.children)
  //내용이 4인 요소 선택 
  console.log(test2.children[3])

  //첫번째 자식요소 반환 (엾으면 null)
  console.log(test2.firstElementChild)

  //마지막
  console.log(test2.lastElementChild)
  
  //마지막의 이전 (엾으면 null)
  console.log(test2.lastElementChild.previousElementSibling)
  
  //처음의 다음 (엾으면 null)
  console.log(test2.firstElementChild.nextElementSibling)

  //두번 째 요소 클릭 시 빨간 배경으로 변경 
  const second = test2.firstElementChild.nextElementSibling
  second.addEventListener("click",function(){
    this.style.backgroundColor="red"
  })

  //test2의 부모 요소만을 반환
  console.log(test2.parentElement)

  //parentElement와 parentNode의 차이점
  /*부모가 없을 경우 
    ParentNode : Doc반환
    ParentElement : Null반환 */
})