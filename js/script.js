const carouselImages = document.getElementById('carouselImages');
const images = document.querySelectorAll('.carousel-images img');
const container = document.querySelector('.carousel-container');

let index = 0;
let timer;

// Indicadores (bolinhas) criados via JS para não alterar o HTML
const dotsWrap = document.createElement('div');
dotsWrap.className = 'carousel-dots';
images.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.addEventListener('click', () => {
        showSlide(i);
        restartTimer();
    });
    dotsWrap.appendChild(dot);
});
container.appendChild(dotsWrap);

function updateDots() {
    dotsWrap.querySelectorAll('span').forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function showSlide(n) {
    if (n >= images.length) {
        index = 0;
    } else if (n < 0) {
        index = images.length - 1;
    } else {
        index = n;
    }

    const offset = -index * 100;
    images.forEach(img => {
        img.style.transform = `translateX(${offset}%)`;
    });
    updateDots();
}

function nextSlide() {
    showSlide(index + 1);
    restartTimer();
}

function prevSlide() {
    showSlide(index - 1);
    restartTimer();
}

// Passagem automática a cada 3 segundos
function restartTimer() {
    clearInterval(timer);
    timer = setInterval(() => showSlide(index + 1), 3000);
}

showSlide(0);
restartTimer();
