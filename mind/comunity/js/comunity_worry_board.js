/* 모달창 열기 */

const openBtn = document.querySelector("#openModal")
const modal =  document.querySelector(".modal")
const openModal = ()=>{
    modal.classList.remove("hidden")
}
const closeModal = ()=>{
    modal.classList.add("hidden")
}
const togleModal = ()=>{
    category.classList.toggle("hidden")
}

const closeBtn = document.querySelector("#closeModal")
openBtn.addEventListener("click", openModal)
closeBtn.addEventListener("click", closeModal)

/* 카테고리 여닫기 */
const categoryBtn = document.querySelector(".worry_category")
const category = document.querySelector(".worry_top_wrap + .worry_category_wrap")
categoryBtn.addEventListener("click",togleModal)



