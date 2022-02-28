const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.querySelector("#todoList");

//localStorage 저장용 array
const todo = [];

toDoForm.addEventListener("submit",handleToDoSubmit);

function handleToDoSubmit(event){
  //submit의 기본 동작은 새로고침 => 새로고침 동작을 중지시킴
  event.preventDefault();
  console.log(toDoInput.value);

  //입력한 값을 변수에 저장 
  const newToDo = toDoInput.value;

  //todo가 생성될 때마다 array에 추가 
  todo.push(newToDo);
  //li생성 후 화면출력
  insertToDo(newToDo);
  //localStorage 저장
  saveTodo();

  //enter시 input vlaue empty
  toDoInput.value= "";
}

//localStorage 저장용함수  
function saveTodo(){
  //localStorage에는 array 저장 불가능, text만 저장 가능
  // JSON.stringify를 이용하여 배열 형태로 저장 (형태는 배열이지만 자료형은 String)
  localStorage.setItem("todo", JSON.stringify(todo))
}

function insertToDo(newToDo){
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");

  //span 태그에 input value 삽입
  span.innerText=newToDo;
  console.log(span);

  //삭제버튼 추가
  button.innerText="❌";
  button.setAttribute('type', 'button');
  //button.setAttribute("onclick","deleteToDoList()");
  button.addEventListener("click",deleteToDoList);
  
  //li 태그에 span, button 추가
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
  console.log(toDoList);
}

function deleteToDoList(event){
  const li = event.target.parentElement;

  li.remove();
  console.log(event.target.parentElement);
}