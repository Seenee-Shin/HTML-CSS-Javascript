// const input = loginForm.querySelector("input")
//               //login-from(id) 안에 존재하는 요소는 login-form에서 선택가능
// const btn = loginForm.querySelector("button")
const loginForm = document.querySelector('#login-form')
const loginInput = document.querySelector("#login-form input")
const greeting =  document.querySelector("#greeting")


const hidden_className = "hidden" 
function onLoginSubmit(event){
  event.preventDefault()
  //.preventDefault() : 기본동작이 실행 되는 것을 막음 
  loginForm.classList.add(hidden_className)
  const username = loginInput.value

  //h1 태그에 환영인사 입력
  greeting.innerText = `Hello! ${username}`
  // ``(백틱 사용으로 text와 변수명 한번에 사용)

  //class 지우기
  greeting.classList.remove(hidden_className)

}

loginForm.addEventListener("submit", onLoginSubmit)





