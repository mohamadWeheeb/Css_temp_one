let icon = document.querySelector('.links');
let ul = document.querySelector(".links ul")


icon.addEventListener('click' , function() {
    ul.classList.toggle('active');
});