function getRandomColor() {
    return `#${Math.floor(Math.random()*16777215).toString(16)}`
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
