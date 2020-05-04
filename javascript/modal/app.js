// select modal-btn,modal-overlay,close-btn
const modalButton = document.querySelector('.modal-btn')
const modalOverlay= document.querySelector('.modal-overlay')
const closeButton = document.querySelector('.close-btn')
// listen for click events on modal-btn and close-btn
 modalButton.addEventListener('click', () => {
     console.log('clicked')
     console.log(modalOverlay)
     modalOverlay.classList.toggle("open-modal")
 })

 closeButton.addEventListener('click', () => {
    modalOverlay.classList.remove("open-modal")
 })
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay
