const openButton = document.querySelectorAll(".product-preview-button");
const closeButton = document.querySelector(".modal-close-button");
const modal = document.querySelector(".modal-container");

closeButton.addEventListener("click", () => {
    modal.classList.add("modal-disappear-opacity");
    modal.classList.remove("modal-appear-opacity");
    setTimeout(() => {
        modal.classList.add("disapear-modal");
        modal.classList.remove("appear-modal");
    }, 200);
});

openButton.forEach(button => {
    button.addEventListener("click", () => {
        modal.classList.add("appear-modal");
        modal.classList.remove("disapear-modal");
        setTimeout(() => {
            modal.classList.add("modal-appear-opacity");
            modal.classList.remove("modal-disappear-opacity");
        }, 200);
    })
})