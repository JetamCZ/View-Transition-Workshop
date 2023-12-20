const element = document.getElementById("block")

function modifyRectPosition() {
    element.style.top = `${getRndInteger(0, 500)}px`
    element.style.left = `${getRndInteger(0, 800)}px`
    element.style.backgroundColor = getRandomColor()
}

element.addEventListener("click", (e) => {
    if (!document.startViewTransition) {
        modifyRectPosition();
    } else {
        document.startViewTransition(modifyRectPosition);
    }
})
