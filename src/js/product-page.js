const openButton = document.querySelectorAll(".product-preview-button");
const closeButton = document.querySelector(".modal-close-button");
const modal = document.querySelector(".modal-container");
const modalOverlay = document.querySelector(".modal-overlay");

closeButton.addEventListener("click", () => {
    modal.classList.add("modal-disappear-opacity");
    modal.classList.remove("modal-appear-opacity");
    modalOverlay.classList.add("modal-disappear-opacity");
    modalOverlay.classList.remove("modal-appear-opacity");
    setTimeout(() => {
        modal.classList.add("disappear-modal");
        modal.classList.remove("appear-modal");
        modalOverlay.classList.add("disappear-modal");
        modalOverlay.classList.remove("appear-modal");
    }, 200);
});

openButton.forEach(button => {
    button.addEventListener("click", () => {
        modal.classList.add("appear-modal");
        modal.classList.remove("disappear-modal");
        modalOverlay.classList.add("appear-modal");
        modalOverlay.classList.remove("disappear-modal");
        setTimeout(() => {
            modal.classList.add("modal-appear-opacity");
            modal.classList.remove("modal-disappear-opacity");
            modalOverlay.classList.add("modal-appear-opacity");
            modalOverlay.classList.remove("modal-disappear-opacity");
        }, 200);
    })
})