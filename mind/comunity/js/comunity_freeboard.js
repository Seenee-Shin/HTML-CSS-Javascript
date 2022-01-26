const write = document.querySelector("#free_board_write")
const writing = document.querySelector("#post_textarea")

window.onresize = function(){
    var innerWidth = window.innerWidth;
    var innerHeight = window.innerHeight;
    
    if(innerWidth <= 768){
        writing.readOnly=true
        
    }else{
        writing.readOnly=false

    }
}