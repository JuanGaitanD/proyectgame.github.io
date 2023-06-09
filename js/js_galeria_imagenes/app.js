document.addEventListener('DOMContentLoaded', function() {
let carousel = document.querySelector('.carousel');
let sliders = [];

let slideIndex = 0;

const createSlide = () => {
    if(slideIndex >= movies.length){
        slideIndex = 0;
    }

    let slide = document.createElement('div');
    let imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    imgElement.src = movies[slideIndex].img;
    slideIndex++;

    slide.className = 'slider';
    content.className = 'slider-content';
    h1.className = 'game-title';
    p.className = 'game-desc';

    sliders.push(slide);

    if(sliders.length){
         sliders[0].style.marginLeft =  `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`;
    }
}

for(let i = 0; i < 5; i++){
    createSlide();
};

setInterval(() => {
    createSlide();
}, 3000);
});