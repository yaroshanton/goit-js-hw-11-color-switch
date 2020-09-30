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

startBtnRef.addEventListener('click', onBackgroundColor)

function onBackgroundColor() {
    let actingColor = null;



    setInterval(() => {
        const BGColor = colors[Math.floor(Math.random() * colors.length)];
        actingColor = BGColor;
        bodyRef.style = `background-color: ${actingColor};`
    }, 1000);

    startBtnRef.disabled = true;