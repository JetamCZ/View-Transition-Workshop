const element = document.getElementById("block")

function modifyRectPosition() {
    element.style.top = `${getRndInteger(0, 500)}px`
    element.style.left = `${getRndInteger(0, 800)}px`
    element.style.backgroundColor = getRandomColor()
}

element.addEventListener("click", (e) => {
    const transition = document.startViewTransition(modifyRectPosition);
    console.log(transition)
})
