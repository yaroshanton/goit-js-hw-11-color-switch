import './styles.scss';

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const startBtnRef = document.querySelector('[data-action = "start"]')
const stopBtnRef = document.querySelector('[data-action = "stop"]')
const bodyRef = document.querySelector('body')

startBtnRef.addEventListener('click', onStartBackgroundColor)
stopBtnRef.addEventListener('click', onStopBackgroundColor)

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

let interval = null;

function onStartBackgroundColor() {
    interval = setInterval(() => {
        const GenerateColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
        bodyRef.style = `background-color: ${GenerateColor};`
    }, 1000);
    startBtnRef.disabled = true;
}

function onStopBackgroundColor() {
    clearInterval(interval);
    startBtnRef.disabled = false;
}