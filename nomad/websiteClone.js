const h1 = document.querySelector(".hello:first-child h1")

function handleh1Click(){
  
  const clickedClass = "active"
  
  if(h1.className === clickedClass){
    h1.className = ""
  }else{
    h1.className = clickedClass
  }

}

h1.addEventListener("click",  handleh1Click)
//addEventListener 선호 -> removeEvent 사용 가능 
