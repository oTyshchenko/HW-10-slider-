let dots = document.getElementsByClassName('slider-dot_item');
let arrows = document.getElementsByClassName('slider-btn');
let slides = document.getElementsByClassName('slider-item');
const getNumberOfActiveSlide = () => {numberOfActiveSlide = document.getElementsByClassName('active-slide')[0].dataset.slideNumber;}
const removeActiveClass= () => {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active-slide');
    };
};
function changeSlide() {
    removeActiveClass();
    slides[this.dataset.dotNumber].classList.add('active-slide');
};
function arrow() {
    getNumberOfActiveSlide();
    removeActiveClass();
    if (this == arrows[0]) {
        if (numberOfActiveSlide == 0) {
            numberOfActiveSlide = slides.length;
        } slides[numberOfActiveSlide-1].classList.add('active-slide');
    }   if (numberOfActiveSlide == slides.length - 1) {
            numberOfActiveSlide = -1;
        } slides[+numberOfActiveSlide + 1].classList.add('active-slide');
};
for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", changeSlide);
    dots[i].setAttribute('data-dot-number', i);
    slides[i].setAttribute('data-slide-number', i);
};
for (let j = 0; j < arrows.length; j++) {
    arrows[j].addEventListener('click', arrow)
};