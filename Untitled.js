const btns = document.querySelectorAll("[data-target]");
const close_btn = document.querySelectorAll(".modal-btn");
const overlay = document.querySelector("#overlay");

btns.forEach((btn) => {
    btn.addEventListener('click', ()=>{
        document.querySelector(btn.dataset.target).classList.add("active");
        overlay.classList.add("active");
    });
});

close_btn.forEach((btn) => {
    btn.addEventListener('click', ()=>{
        document.querySelector(btn.dataset.target).classList.remove("active");
        overlay.classList.remove("active");
    });
});

window.onclick = (e) => {
    if (e.target == overlay) {
        const modals = document.querySelectorAll(".modal");
        modals.forEach((modal) => {
            modal.classList.remove("active")
            overlay.classList.remove("active")
        })
    }
}