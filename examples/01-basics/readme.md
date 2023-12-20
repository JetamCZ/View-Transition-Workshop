# 01 - Basics

## Setup
We have basic HTML page where we change element position when user click on it.

```html

<html>
<head>
    <title>Document</title>
    <script src="../utils/utils.js" defer></script>
    <script src="todo/script.js" defer></script>
    <link rel="stylesheet" href="todo/style.css">
</head>
<body>
<div id="block"></div>
</body>
</html>
```

```js
// script.js
const element = document.getElementById("block")

element.addEventListener("click", (e) => {
    element.style.top = `${getRndInteger(0, 500)}px`
    element.style.left = `${getRndInteger(0, 800)}px`
    element.style.backgroundColor = getRandomColor()
})

```

##  Add view transition animation
Lets add view transition animation. Move the animation function to own function `modifyRectPosition` and call `document.startViewTransition`.
```js
document.startViewTransition(modifyRectPosition);
```

## The default animation
Default animation for view transition api is just opacity. `TRY IT` 😏

## Do not forget that safari is 💩
View transition api is still experimental feature that is not supported by other broeser than chromium. 

more info:
https://caniuse.com/?search=View%20Transition%20API

Add check if user browser supports view transition api.

```js
if (!document.startViewTransition) {
    modifyRectPosition();
} else {
    document.startViewTransition(modifyRectPosition);
}
```

## Make it slower
You can modify the parameters of animation by css

```css
::view-transition-group(root) {
    animation-duration: 5s;
}
```

