const confirmObj = {
  userId : false,
  userPw1 : false,
  userPw2 : false,
  userName : false,
  userEmail: false
}

// id 유효성 검사
document.getElementById("userId").addEventListener("input", function(){
  // input : 입력과 관련된 모든 활동 인지 (복붙 가능 )

  if(this.value.trim().lenght == 0){
    //아무것도 입력되지 않았을때 
    this.removeAttribute("class")
    confirmObj.userId = false
    return
  }
  //조건 :영어 소문자 시작 , 
  //      영어 대소문자,숫자,-,_가능
  //      전체길이 6~14글자
  const regex = /^[a-z][a-zA-Z\d\-\_]{5,13}$/

  if(regex.test(this.value)){
    //아이디가 유효한경우
    this.classList.add("validation");
    this.classList.remove("invalidation");
    confirmObj.userId = true

  }else{
    //아이디가  유효X
    this.classList.add("invalidation");
    this.classList.remove("validation");
    confirmObj.userId = false
  }
})

document.getElementById("userPw1").addEventListener("input", function(){
  
  if(this.value.trim().length == 0){
    //아무것도 입력되지 않았을때 
    this.removeAttribute("class")
    confirmObj.userPw1 = false
    return
  }
  const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,14}$/ 

  if(regex.test(this.value)){
    this.classList.add("validation")
    this.classList.remove("invalidation")
    confirmObj.userPw1 = true
  }else{
    this.classList.add("invalidation")
    this.classList.remove("validation")
    confirmObj.userPw1 = false
  }
})

document.getElementById("userPw2").addEventListener("input", function(){
  const pw = document.getElementById("userPw1").value

  if(this.value.trim().length == 0){
    //아무것도 입력되지 않았을때 
    this.removeAttribute("class")
    confirmObj.userPw2 = false
    return
  }

  if(pw == this.value ){
    this.classList.add("validation")
    this.classList.remove("invalidation")
    confirmObj.userPw2 = true
  }else{
    this.classList.add("invalidation")
    this.classList.remove("validation")
    confirmObj.userPw2 = false
  }
})

//이름 유효성 검사
//한글 (자음+모음+[받침] 2글자 이상 5글자 이하)
// /^[가-힣]{2,5}$/
document.getElementById("userName").addEventListener("input",function(){
  const regex = /^[가-힣]{2,5}$/

  if(this.value.trim().length == 0){
    //아무것도 입력되지 않았을때 
    this.removeAttribute("class")
    confirmObj.userName = false
    return
  }
  
  if(regex.test(this.value)){
    this.classList.add("validation")
    this.classList.remove("invalidation")
    confirmObj.userName = true
  }else{
    this.classList.add("invalidation")
    this.classList.remove("validation")
    confirmObj.userName = false
  }
  })


//이메일 유효성 검사
// - 문자 4글자 이상,@ 문자 1개이상 -> 1~3반복
// /^[\W]{4,}@[\w]+(\.[\w]+){1,3}$/
document.getElementById("userEmail").addEventListener("input",function(){
  const regex = /^[\w]{4,}@[\w]+(\.[\w]+){1,3}$/

  if(this.value.trim().length == 0){
    //아무것도 입력되지 않았을때 
    this.removeAttribute("class")
    confirmObj.userEmail = false
    return
  }
  
  if(regex.test(this.value)){
    this.classList.add("validation")
    this.classList.remove("invalidation")
    confirmObj.userEmail = true
  }else{
    this.classList.add("invalidation")
    this.classList.remove("validation")
    confirmObj.userEmail = false
  }
})

function check(value){
    if(this.value.trim().length == 0){
    //아무것도 입력되지 않았을때 
    this.removeAttribute("class")
    return
  }

  if(regex.test(this.value)){
    this.classList.add("validation")
    this.classList.remove("invalidation")
  }else{
    this.classList.add("invalidation")
    this.classList.remove("validation")
  }
}

//유효성 검사 여부 확인
function signUpVaildate(){
  //1. for문 이용 confrimObj값에 접근
  for( let key in confirmObj){

    //2.현재 키에 맵핑되는 value가 false인 경우 조회
    if(confirmObj[key] == false){

      //3.경고창 출력
      alert("유효하지 않은 값이 입력되었습니다.")

      //4.유효하지 않은 값이 입력된 input으로 이동
      document.getElementById(key).focus()

      //5. 함수 종류 및 false 반환
      return false
    }
  }
}