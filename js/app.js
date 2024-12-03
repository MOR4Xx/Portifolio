const carrossel = document.querySelector('.nav-posters ul');
const items = document.querySelectorAll('.nav-posters li');
const prevButton = document.getElementById('button-ant');
const nextButton = document.getElementById('button-prox');

let currentIndex = 0;

function updateCarrossel() {
    const offset = -currentIndex * (items[0].clientWidth + 10);
    carrossel.style.transform = `translateX(${offset}px)`;

    items.forEach((item, index) => {
        item.classList.remove('active', 'adjacent');
        if (index === currentIndex) {
            item.classList.add('active');
        } else if (index === currentIndex - 1 || index === currentIndex + 1) {
            item.classList.add('adjacent');
        }
    });
}

function nextItem() {
    if (currentIndex < items.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarrossel();
}

function prevItem() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = items.length - 1;
    }
    updateCarrossel();
}

nextButton.addEventListener('click', nextItem);
prevButton.addEventListener('click', prevItem);

updateCarrossel();
