import './lotto-ball.js';

const generateButton = document.getElementById('generate-button');
const themeToggle = document.getElementById('theme-toggle');
const numbersContainer = document.getElementById('numbers-container');
const body = document.body;

// Theme Logic
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.textContent = '☀️';
    } else {
        body.classList.remove('dark-mode');
        themeToggle.textContent = '🌙';
    }
}

function toggleTheme() {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        themeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.add('dark-mode');
        themeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    }
}

themeToggle.addEventListener('click', toggleTheme);

// Lotto Generation Logic
function generateNumbers() {
    numbersContainer.innerHTML = '';
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    sortedNumbers.forEach((number, index) => {
        setTimeout(() => {
            const lottoBall = document.createElement('lotto-ball');
            lottoBall.setAttribute('number', number);
            numbersContainer.appendChild(lottoBall);
        }, index * 200); // Stagger the animation
    });
}

generateButton.addEventListener('click', generateNumbers);

// Initial actions
initTheme();
generateNumbers();