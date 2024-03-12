
// const clickOpen = (event) => {
//     if (event.target.classList[1] === "fa-caret-right") {
//         event.target.classList.remove("fa-caret-right");
//         event.target.classList.add("fa-caret-down");
//         event.target.parentNode.parentNode.children[1].style.display = "flex";
//     }
//     else if (event.target.classList[1] === "fa-caret-down"){
//         event.target.classList.remove("fa-caret-down");
//         event.target.classList.add("fa-caret-right");
//         event.target.parentNode.parentNode.children[1].style.display = "none";
//     }
//     else if (event.target.children[0].classList[1] === "fa-caret-right") {
//         event.target.children[0].classList.remove("fa-caret-right");
//         event.target.children[0].classList.add("fa-caret-down");
//         event.target.parentNode.children[1].style.display = "flex";
//     }
//     else if (event.target.children[0].classList[1] === "fa-caret-down"){
//         event.target.children[0].classList.remove("fa-caret-down");
//         event.target.children[0].classList.add("fa-caret-right");
//         event.target.parentNode.children[1].style.display = "none";
//     }
    
// }

let cards = document.querySelectorAll(".proj-card");
let modals = document.querySelectorAll(".modal");
let closeButtons = document.querySelectorAll(".close");

cards.forEach((card, index) => {
    card.addEventListener("mouseover", () => {
        card.style.width = "95%";
    })
    card.addEventListener("mouseout", () => {
        card.style.width = "100%";
    })
    card.addEventListener("click", () => {
        modals[index].style.display = "block";
    })
    if (index % 2 != 0) {
        card.style.backgroundColor = "#423D36";
        card.style.color = "#46a0dc";
    }
})

closeButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        modals[index].style.display = "none";
    })
})

window.onclick = (event) => {
    modals.forEach((modal) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    })
}