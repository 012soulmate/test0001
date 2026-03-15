import './lotto-ball.js';

const generateButton = document.getElementById('generate-button');
const numbersContainer = document.getElementById('numbers-container');

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

// Initial generation
generateNumbers();