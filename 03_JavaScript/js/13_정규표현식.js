//정규표현식
document.getElementById("btn1").addEventListener("click" , () => {
  //정규 표현식 객체 생성
  const regExp1 = new RegExp("script")
  const regExp2 = /java/

  console.log(regExp1.test("javascript"))
  console.log(regExp1.test("tbqkd"))

  console.log(regExp2.exec("sodlfRmxska"))
  console.log(regExp2.exec("java"))

})

//메타문자 
document.getElementById("btn2").addEventListener("click",()=>{  
  
  //문자열 내의 a 검색 
  const regex = /a/
  console.log(regex.test("apple")) //true
  console.log(regex.test("price")) //false

  //[abcd] 문자열 내의 a,,b,c,d 중 하나라도 일치하는 문자가 있는지 검색
  const regex2 =/[abcd]/
  console.log("[/abcd/] : " + regex2.test("qwerty"))
  console.log("[/abcd/] : " + regex2.test("qwertyd"))

  //^group : 문자열이 group이라는 단어로 시작하는지 검색
  const regex3 = /^group/
  console.log("^group : " + regex3.test("groupchat"))
  console.log("^group : " + regex3.test("chatgroup"))
  
  //script$ : 문자열이 script 로 끝나는지 검색
  const regex4 = /script$/
  console.log("/script$/ : "+ regex4.test("javascript")) 
  console.log("/script$/ : "+ regex4.test("script 란?")) 

})

//추가 메타문자 확인
document.getElementById("btn4").addEventListener("click",()=>{
  const regex1 = /a*/
  const regex2 = /a+/
  const regex3 = /.a/
  const regex4 = /...b/
  const regex5 = /..b../

  console.log(regex1.test("bbbbb"))
  console.log(regex2.test("bbabbb"))

  const regex6 = /^j.*t$/
  console.log(regex6.exec("javascript"))
  console.log(regex6.exec("jt"))
  console.log(regex6.exec("javascript javascript javascript"))


  //수량관련 메타문자
  const regex7 = /a{2,4}/g
  console.log(regex7.exec("a/aa/aaa/aaaaa"))

  //string.replace("찾을 문자열","바꿀 문자열")
  //맨처음 일치하는 문자를 변경
  console.log("a/aa/aaa/aaaaa".replace("a","b"))

  //string.replaceAll("찾을 문자열","바꿀 문자열")
  //일치하는 모든 문자열 변경
  console.log("a/aa/aaa/aaaaa".replaceAll("a","b"))
  
  //정규표현식 사용가능 -> 문자열에서 정규식과 일치하는 부분을 바꿈
  console.log("a/aa/aaa/aaaaa".replaceAll(regex7,"b"))

  //플래그 문자 g : 문자열 전체 검색(전역비교 )
  const regex8 = /\-/g //문자열 전체에서 "-"를 찾는 정규표현식
  console.log("010-2247-1339".replaceAll(regex8,""))
})



//문자열이 j또는 a로 시작하고 t 또는 x 로 끝나는지 확인
document.getElementById("btn3").addEventListener("click", e=>{
  //화살표 함수에는 this를 사용할 수 없다 -> e.target 사용
  const input = e.target.previousElementSibling
  console.log(input.value)

  //조건에 만족하는 정규표현식 작성
  const regex = 
  
  //띄어쓰기 사용 불가 
  // \w : word
  // \d : degit 0~9 사이 숫자
  // \s : space
  // * : 0개 이상 , 없거나 여러개가 있을 수 있음
  // ㄱ-힣 : 한글 모두 
  // \_ : 언더바 escape문자

  console.log(regex.test(input.value))

})

//주민등록번호 입력기 
document.getElementById("btn5").addEventListener("click", e=>{
  const idNum = e.target.previousElementSibling.value
  console.log(idNum)

  //주민등록번호 확인용 정규표현식
  const regex=/^\d{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])-[1-4]\d{6}$/
  // ^\d{2} : 년도 ()
  // (0[1-9]|1[0-2]) : 월  0[1-9]: 01~09월  1[0-2]:10~12월 | :또는
  // () : 포획 괄호 , 괄호내부에 대응되는 부분을 찾아서 기억함
  //(0[1-9]|[12][0-9]|3[01]) : 일
  console.log(regex.test(idNum))
})


//주민등록 검사 
document.getElementById("input1").addEventListener("keyup", function(){
  
  //번호검사 정규식
  const regex=/^\d{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])-[1-4]\d{6}$/

  //결과 출력
  const result = document.getElementById("result")

  //안내멘트 출력
  if(regex.test(this.value)){
    result.innerText="유효한 형식의 주민등록번호입니다."
    //classList : 요소가 가지고 있는 class 조회
    result.classList.add("validation") //class추가


    //전의 class가 남아있기 때문에 남아있는 class 제거
    result.classList.remove("invalidation")
  }else{
    result.innerText="유효한 형식의 주민등록번호가 아닙니다."
    result.classList.add("invalidation")
    result.classList.remove("validation")
  }

})

//flag문자 
// g 
document.getElementById("btn6").addEventListener("click", function(){
  const regex = /a\w+\s/g;
  const str = "abc aaa apple"

  //String.match(정규식 객체) : 해당 정규식에 일치하는 모든 문자열을 배열로 반환
  str.match(regex)


  //i
  const regex2 = new RegExp("java","i")
  const str2 = "java"
  const str3 = "jAvA"
  const str4 = "JAVA"
  
  console.log(regex2.test(str2))
  console.log(regex2.test(str3))
  console.log(regex2.test(str4))

  //m  :개행문자를 기준으로 문자열 마다 검사
  const regex3= /^j/gm
  const str5 = "java \njavascript"
  console.log(str5.match(regex3))
  console.log(str5.replaceAll(regex3,"@"))
})
