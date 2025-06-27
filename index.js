const toggle = document.querySelector('.toggle');
const toggleButton = toggle.firstElementChild;

const priceSpans = document.querySelectorAll('.price span');

let activeType = 0; // 0: Monthly - 1: Yearly

const monthlyPrices = [19.99, 24.99, 39.99];
const yearlyPrices = [199.99, 249.99, 399.99];

function toggleType() {
    toggleButton.classList.toggle("active");
    activeType = activeType == 0 ? 1 : 0;

    // Update the prices
    updatePrices();
}

function updatePrices() {
    priceSpans.forEach((priceSpan, index) => {
        priceSpan.classList.remove('active');
        void priceSpan.offsetWidth;

        priceSpan.innerHTML = activeType == 0
            ? monthlyPrices[index] : yearlyPrices[index];

        priceSpan.classList.add('active');
    });
}

function onKeyDown(event) {
    const { key } = event;

    if (key != "ArrowLeft" && key != "ArrowRight") {
        return;
    }
    
    if (key == "ArrowLeft" && activeType != 1) {
        activeType = 1;
        toggleButton.classList.remove("active");

    } else if (key == "ArrowRight" && activeType != 0) {
        activeType = 0;
        toggleButton.classList.add("active");
    }

    // Update the prices
    updatePrices();
}

function onMount() {
    toggle.addEventListener("click", toggleType);
    document.addEventListener("keydown", onKeyDown);
}

document.addEventListener('DOMContentLoaded', onMount);
