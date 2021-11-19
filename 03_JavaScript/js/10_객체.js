document.getElementById("btn1").addEventListener("click",function(){
  //1. {}를 이용한 객체 생성 
  const brand = "투썸"

  const product = {
    //속성
    pName : "텀블러",
    brand : "스타벅스",
    color :  ["white", "black", "silver"],
    amount : 100,

    //기능 -> 메소드
    mix : function(add){alert(add+"자동으로 섞어줍니다.")} ,

    infomation : function(){
      console.log("brand : " + brand)
      console.log("this.brand : " + this.brand)
      //메소드에서 동일 객체 내부의 다른 속성을 참조하려면 this.속성명을 작성해야한다.

    }
}
  const div1 = document.getElementById("div1")

  div1.innerHTML = ""
  div1.innerHTML += "product.pName : " + product.pName+"<br>"
  div1.innerHTML += "product['pName'] : " + product['pName']+"<br>"
  div1.innerHTML += "product['brand'] : " + product['brand']+"<br>"
  div1.innerHTML += "product.amount : " + product.amount+"<br>"
  
  //색상(배열)
  //배열 출력시 자동으로 toString 호출
  div1.innerHTML += "product.color : " + product.color+"<br>"
  div1.innerHTML += "product['color'] : " + product['color']+"<br>"
  
  //배열 중 하나의 값 
  div1.innerHTML += "product.color[1] : " + product.color[1]+"<br>"
  div1.innerHTML += "product['color'][1] : " + product['color'][1]+"<br>" //2차 배열
  
  //for of를 이용한 출력
  // for( 변수 of 배열/컬렉션 명){}
  for(let c of product.color){
    div1.innerHTML += c + " " 
  }
  div1.innerHTML += "<br>"

  //메소트 호출
  product.mix("커피")

  product.infomation()

})


//2.생성자 함수를 이용한 객체 생성 
//1) 생성자 함수 정의 
// 생성자 함수의 함수명은 반드시 대문자로 시작 

function Student(name,age,java, db, html,css){

  // 매개변수로 전달 받은 값을 생성되는 객체의 속성에 대입 
  //this.name = 생성되는 객체의 name 속성 (없으면 생성 )
  this.name = name
  this.age = age
  this.java =java
  this.db = db
  this.html = html
  this.css = css

  //기능 
  //소수점 둘째자리 까지 평균 반환
  this.getAvg = function(){
    //현재 객체가 가지고 있는 속성의 값
    const sum = Number(this.java) + Number(this.db) + Number(this.html) +Number(this.css)
    const avg = Number(sum/4)
    
    //숫자.toFixed(자릿수): 고정 소수점 방식 (지정 자릿수 까지 소수점 표기)
    return avg.toFixed(1)  // == return Math.round(avg * 100) / 100
  }
}

document.getElementById("btn2").addEventListener("click", function(){
  //Student 생성자 함수를 이용하여 객체생성 
  // 생성자 함수는 new 연사자와 함께 사용된다
  const std1 = new Student("김철수",23,100,90.2,60.73,70.5)

  const std2 = new Student("김미영",28,50.9,60.23,70,80)

  //생성자 함수가 없을 경우 한명한명 값을 지정해야 한다 (코드 중복 발생 )
  // const std1 = {
  /* name :김철수,
    age : 23
    ...
    ...
    
  }
  */

  console.log(std1)
  console.log(std2)

  console.log(std1.name + "의 평균 : " + std1.getAvg())
  console.log(std2.name + "의 평균 : " + std2.getAvg())
})
