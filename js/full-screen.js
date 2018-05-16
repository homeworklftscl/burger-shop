//FULL-SCREEN
let open = document.querySelector('#open');
let close = document.querySelector('#close');
let active = document.querySelector('.full-screen');

open.addEventListener("click", function (e) {
    active.classList.toggle('full-screen_active');
});
close.addEventListener("click", function (e) {
    active.classList.toggle('full-screen_active');
});
