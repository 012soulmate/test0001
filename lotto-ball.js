class LottoBall extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const number = this.getAttribute('number');
        const color = this.getColor(number);
        this.shadowRoot.innerHTML = `
            <style>
                .ball {
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 1.5rem;
                    font-weight: bold;
                    color: white;
                    background-color: ${color};
                    box-shadow: inset 0 0 10px rgba(0,0,0,0.1), 
                                0 4px 8px rgba(0,0,0,0.2);
                    transform: scale(0);
                    animation: pop-in 0.5s forwards;
                }

                @keyframes pop-in {
                    to { transform: scale(1); }
                }
            </style>
            <div class="ball">${number}</div>
        `;
    }

    getColor(number) {
        const num = parseInt(number);
        if (num <= 10) return '#fbc400'; // Yellow
        if (num <= 20) return '#69c8f2'; // Blue
        if (num <= 30) return '#ff7272'; // Red
        if (num <= 40) return '#aaaaaa'; // Gray
        return '#b0d840'; // Green
    }
}

customElements.define('lotto-ball', LottoBall);