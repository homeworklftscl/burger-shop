//FULL-SCREEN
let open = document.querySelector ( '#open');
let close = document.querySelector('#close');
let active = document.querySelector('.full-screen');

open.addEventListener("click", function(e) {
    active.classList.toggle('full-screen_active');
});
close.addEventListener("click", function (e) {
    active.classList.toggle('full-screen_active');
});

//TEAM
let teamName = document.querySelector ('.teammate__name');
let accordeonItam = document.querySelector('.accordeon__item');

teamName = document.addEventListener("click", function (e) { 
    e.preventDefault();
    accordeonItam.classList.toggle('accordeon__item_active');
    
    
})


