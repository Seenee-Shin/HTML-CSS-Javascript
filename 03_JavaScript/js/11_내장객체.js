//date 확인 
document.getElementById("btn1").addEventListener("click",function(){
  const date1 = new Date()
  console.log(date1)

  //GMT
  const date2 = new Date("Mon Nov 08 2021 09:00:00")

  //utc
  //월 표기법 0~11월 
  const date3 = new Date(2021, 10, 8, 9, 0,0);
  console.log(date3)

  //date객체에서 날짜/시간 데이터 얻어오기 
  console.log("년도 : " + date1.getFullYear())
  console.log("월 : " + date1.getMonth() + 1)
  console.log("일 : " + date1.getDate())

  const arr = ["일", "월", "화", "수", "목", "금", "토" ];
  //일 == 0 토 == 6
  console.log("요일 : " + arr[date1.getDay()])

})

//setTimeout
document.getElementById("btn2").addEventListener("click",function(){
  window.setTimeout(function(){
    alert("setTimeout 확인")
  },3000)
})

document.getElementById("btn3").addEventListener("click",function(){
  setTimeout(function(){
    alert("이동합니다.")  
    location.href = "https://vimeo.com/ko/"
  },3000)
})

//setInterval 
document.getElementById("btn4").addEventListener("click",function(){
  window.setInterval(function(){
    console.log("감기조심")
  },1000)
})

//setInterval 문제해결 1
document.getElementById("btn5").addEventListener("click",function(){
  let count = 1

  setInterval(function(){
    console.log(count++)
  },500)
  
  //이벤트가 발생한 버튼 비활성화
  this.setAttribute("disabled",true)
})

//setInterval 문제해결 2 - boolean
let flag = true
document.getElementById("btn6").addEventListener("click",function(e){
  if(flag){
    flag = false

    let count = 1
  
    setInterval(function(){
      // this.innerText = count++ -> 사용 불가 : 일반적인 함수 내에서 this는 window 객체와 묶인다
      e.target.innerText = count++
    },500)
  }
})


//clock
setInterval(function(){
  const clock = document.getElementById("clock")

  //현재시간 
  const now = new Date()
  clock.innerText = now

  //현재시간을 시,분,초 형태로 가공 
  const text =addZero( now.getHours()) + ":" + addZero( now.getMinutes())+ ":"+ addZero( now.getSeconds());
  clock.innerText = text
},1000)

//시계 자리수 00:00:00으로 맞추기
function addZero(time){

  if(Number(time) < 10){ // 한 자리인 경우
      return "0" + time;
  }else{
      return time;
  }
}


//clearInterval

//setInterval 저장용 변수
let interval

//시작 버튼 
document.getElementById("test-btn1").addEventListener("click", function(){
  interval = setInterval(function(){
    const random = Math.floor(Math.random() * 26 + 1)

    document.getElementById("test").innerText = addZero(random)
  },50)  
})

//종료버튼
document.getElementById("test-btn2").addEventListener("click", function(){
  window.clearInterval(interval)
})

console.log(location.href) // 현재주소 얻어오기