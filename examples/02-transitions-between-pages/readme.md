# 02 - Transitions between pages

```
In this example is used <script type="module">
do not forget to import utils package in script.
```

## Multiple pages
Currently View Transition API does not support transitions between multiple documents. `It should be supported in the feature.`

For now we need some `hacks` or `work arounds`. Or use some kind of client side routing.

## Page utils
For page transitions I prepered functions that will help us keep our changes in same document. 

Utils are ready in file `/utils/page-utils.js`. 

This is a pretty heavy-handed way to update page content. 
In production, you'd likely be modifying DOM elements directly, or using a framework.
innerHTML is used here just to keep the DOM update super simple.


```js
onLinkNavigate(async ({ toPath }) => {
  const content = await getPageContent(toPath);
  
  startViewTransition(() => {
    document.body.innerHTML = content;  
  });
});
```

## Make it slower (again)
```css
::view-transition-group(root) {
    animation-duration: 5s;
}
```

## Change the animation
Make your own animation or copy this one. 

```css
@keyframes slide-from-right {
    from { transform: translateX(300px); }
    to { transform: translateX(0px); }
}

@keyframes slide-to-left {
    from { transform: translateX(0px); }
    to { transform: translateX(-300px); }
}
```

You can apply animation with. You can see here that we can change animation separetly for old and new element on page. 
```css
::view-transition-old(root) {
    animation: 4000ms slide-to-left;
}

::view-transition-new(root) {
    animation: 4000ms slide-from-right;
}
```
