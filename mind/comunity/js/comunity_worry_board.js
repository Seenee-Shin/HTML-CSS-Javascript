/* 모달창 열기 */

const openBtn = document.querySelector("#openModal")
const modal =  document.querySelector(".modal")
const openModal = ()=>{
    modal.classList.remove("hidden")
}

const closeBtn = document.querySelector("#closeModal")
const closeModal = ()=>{
    modal.classList.add("hidden")
}
openBtn.addEventListener("click", openModal)
closeBtn.addEventListener("click", closeModal)