let sliderConteiner = document.querySelector('.slider__conteiner');
let slider = document.querySelector('.slider-burgers');
let list = document.querySelector('.slider-burgers__list');
let sliderWidth = slider.clientWidth;
let itemCount = list.children.length;
let listWidth = sliderWidth * itemCount;
let activeSlide = null;
let step = sliderWidth;
let slidePos = 0;

list.style.width = listWidth + 'px';

sliderConteiner.addEventListener('click', function (e) {
    e.preventDefault();
    activeSlide = list.querySelector('.slider-burgers__item_active');

    if (e.target.classList.contains('arrow__svg_right')) {

        if (activeSlide.nextElementSibling) {
            slideTo('next');
        }
    } else if (e.target.classList.contains('arrow__svg_left')) {

        if (activeSlide.previousElementSibling) slideTo('prev');
    }
});

    function slideTo(vector) {
        if (vector === 'next') {
            slidePos += step;
            activeSlide.nextElementSibling.classList.add('slider-burgers__item_active');
        } else {
            slidePos -= step;
            activeSlide.previousElementSibling.classList.add('slider-burgers__item_active');
        }

        list.style.transform = `translateX(${-slidePos}px)`;
        activeSlide.classList.remove('slider-burgers__item_active');
    }