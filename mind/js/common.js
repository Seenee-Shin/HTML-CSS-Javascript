
// 모바일 헤더 메뉴 
const togle = document.querySelector('.headermenu_togle')
const menu = document.querySelector('.dep1')
const sub_menu = document.querySelector('.dep2')

togle.addEventListener('click', ()=>{
    menu.classList.toggle('active')
})

menu.addEventListener('click', ()=>{
    sub_menu.classList.toggle('active')
})
