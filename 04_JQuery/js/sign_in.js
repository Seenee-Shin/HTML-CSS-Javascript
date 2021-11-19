

document.getElementById("id").addEventListener("blur",function(){
  const regex = /^[a-z][a-zA-Z\d\-\_]{5,13}$/

  if(regex.test(this.value)){
    //아이디가 유효한경우
    this.classList.add("validation");
    this.classList.remove("invalidation");
  }else{
    this.classList.add("invalidation")
    this.classList.remove("validation")
  }
})

// 비밀번호, 비밀번호 확인 
document.getElementById("pw2").addEventListener("input",function(){
  const pw = document.getElementById("pw")
  const pCheck = document.getElementById("password_check")

  
  if(pw.value.trim().length == 0){
    alert("'비밀번호를 입력해주세요'")
    pw.focus()
  }

  if(this.value.trim().length == 0){
    pCheck.innerText = ""
    return
  }
  
  if(pw.value == this.value){
    pCheck.innerText = "비밀번호 일치"
    pCheck.style.color="green"
  }else{
    pCheck.innerText = "비밀번호 불일치"
    pCheck.style.color="red"
  }

})

//이름확인
document.getElementById("name").addEventListener("change",function(){
  const regex = /^[가-힣]{2,5}$/
  const nameCheck = document.getElementById("name_check")

  if(this.value.trim().length == 0){
    nameCheck.innerText = ""
    return
  }

  if(regex.test(this.value)){
    nameCheck.innerText = "정상입력"
    nameCheck.style.color="green"
  }else{
    nameCheck.innerText = "한글만 입력하세요"
    nameCheck.style.color="red"
  }
})


function signUpVaildate(){
  
  
  if((!document.querySelector('input[name="gender"]:checked'))){
    alert("성별을 입력해주세요")
    return false
  }
  
  const regex = /^[0][0-9]{1,2}-[0-9]{3,4}-[0-9]{4}/
  const phone = document.getElementById("phone")
  if(!regex.test(phone.value)){
    alert("전화번호 형식이 올바르지 않습니다.")
    return false
  }
}