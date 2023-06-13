// Modal elements
const modal = document.getElementById('myModal')
const filter = document.querySelector('.filter-button')
const close = document.querySelector('.close-modal')
function openModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'block';
}

function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
}
filter.addEventListener('click', openModal)
close.addEventListener('click', closeModal)