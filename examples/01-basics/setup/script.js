const element = document.getElementById("block")

element.addEventListener("click", (e) => {
    element.style.top = `${getRndInteger(0, 500)}px`
    element.style.left = `${getRndInteger(0, 800)}px`
    element.style.backgroundColor = getRandomColor()
})
