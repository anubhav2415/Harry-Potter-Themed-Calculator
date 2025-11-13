let display = '0';
let previous = null;
let operation = null;
let newNumber = true;

const displayElement = document.getElementById('displayValue');

function updateDisplay() {
    displayElement.textContent = display;
}

function handleNumber(num) {
    if (newNumber) {
        display = String(num);
        newNumber = false;
    } else {
        display = display === '0' ? String(num) : display + num;
    }
    updateDisplay();
}

function handleDecimal() {
    if (newNumber) {
        display = '0.';
        newNumber = false;
    } else if (!display.includes('.')) {
        display += '.';
    }
    updateDisplay();
}

function handleOperation(op) {
    const current = parseFloat(display);

    if (previous === null) {
        previous = current;
    } else if (operation) {
        const result = calculate(previous, current, operation);
        display = String(result);
        previous = result;
        updateDisplay();
    }

    operation = op;
    newNumber = true;
}

function handleEquals() {
    if (operation === null || previous === null) return;

    const current = parseFloat(display);
    const result = calculate(previous, current, operation);
    display = String(result);
    previous = null;
    operation = null;
    newNumber = true;
    updateDisplay();
}

function handleClear() {
    display = '0';
    previous = null;
    operation = null;
    newNumber = true;
    updateDisplay();
}

function calculate(a, b, op) {
    switch (op) {
        case '+': return a + b;
        case '-': return a - b;
        case '×': return a * b;
        case '÷': return b === 0 ? 'Error' : a / b;
        default: return b;
    }
}

// -------------------- FLOATING STARS BACKGROUND ✨ --------------------
const starsContainer = document.getElementById("starsContainer");

function createStars() {
    const numStars = 60; // adjust number of stars here
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement("div");
        star.classList.add("star");
        star.innerHTML = "★"; // Unicode star symbol

        // Random position
        star.style.top = Math.random() * 100 + "vh";
        star.style.left = Math.random() * 100 + "vw";

        // Random size
        const size = Math.random() * 1.5 + 0.5;
        star.style.fontSize = size + "rem";

        // Random animation delay and duration
        star.style.animationDelay = Math.random() * 3 + "s";
        star.style.animationDuration = 1.5 + Math.random() * 2 + "s";

        starsContainer.appendChild(star);
    }
}

createStars();
