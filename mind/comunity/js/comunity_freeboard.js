const write = document.querySelector("#free_board_write")
const writing = document.querySelector("#post_textarea")

if (window.matchMedia('(max-width: 768px)').matches){
    writing.readOnly=true
}
