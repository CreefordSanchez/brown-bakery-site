const openButton = document.querySelectorAll(".product-preview-button");
const closeButton = document.querySelector(".modal-close-button");
const modal = document.querySelector(".modal-container");
const modalOverlay = document.querySelector(".modal-overlay");
const modalImage = document.querySelector(".modal-image");
const modalTitle = document.querySelector(".modal-title");
const modalPrice = document.querySelector(".modal-price");
const modalWeight = document.querySelector(".modal-weight");
const modalDescription = document.querySelector(".modal-description");

const productImage = document.querySelectorAll(".product-image");
const productName = document.querySelectorAll(".product-name p");
const productPrice = document.querySelectorAll(".product-price");
const productServing = document.querySelectorAll(".product-serving");
const productDescription = document.querySelectorAll(".product-hidden-description");

const productItems = document.querySelectorAll(".product-item");

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

openButton.forEach((button, index) => {
    button.addEventListener("click", () => {
        modalImage.src = productImage[index].getAttribute("src");
        modalTitle.innerText = productName[index].innerText;
        modalPrice.innerText = productPrice[index].innerText;
        modalWeight.innerText = productServing[index].innerText;
        modalDescription.innerText = productDescription[index].innerText;
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
