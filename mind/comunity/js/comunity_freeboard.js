const write = document.querySelector("#free_board_write")
const writing = document.querySelector("#post_textarea")

const openModal = ()=>{
    modal.classList.remove("hidden")
}
const closeModal = ()=>{
    modal.classList.add("hidden")
}

window.onresize = function(){
    var innerWidth = window.innerWidth;
    var innerHeight = window.innerHeight;
    
    if(innerWidth <= 768){
        writing.value = ""
        writing.readOnly=true
    }else{
        writing.readOnly=false

    }
}

writing.addEventListener("onclick", openModal)
writing.addEventListener("onclick", closeModal)
