

const contactModal = document.querySelector('#contactModal');
const dialog = document.querySelector('#login');
const closeBtn = document.querySelector('#closeBtn');


contactModal.addEventListener('click', function() {
    dialog.showModal();
})

closeBtn.addEventListener('click', function() {
    dialog.close();
})


setInterval( function(){
    
dialog.showModal();
}, 1000);