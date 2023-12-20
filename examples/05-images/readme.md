# 05 - Images

## Catch page navigation change
Use `onLinkNavigate` to capture page navigation change from our utils.

```js
onLinkNavigate(async ({ toPath }) => {
    const content = await getPageContent(toPath);

    document.startViewTransition(() => {
        document.body.innerHTML = content;
    });
});
```

## Add image to custom transition group
```css
.banner-img img {
    view-transition-name: banner-img;
}
```

sometimes we can have issues with overflows you can use `contain: layout;`

## Animation
```css
::view-transition-old(banner-img),
::view-transition-new(banner-img) {
    animation: none;
    mix-blend-mode: normal;
}

::view-transition-image-pair(banner-img) {
    isolation: none;
}
```


## Pair images on both htmls
```css
.banner-img img {
    view-transition-name: banner-img;
    contain: layout;
}

.gallery img {
    view-transition-name: banner-img;
    contain: layout;
}
```

But there is an issue...
`Unexpected duplicate view-transition-name: banner-img`. We have to add view transition name to second element dynamically.

## Dynamic adding view transition name to new element
remove 
```css
.gallery img {
    view-transition-name: banner-img;
    contain: layout;
}
```

We will need base on direction of routing add view transition name before or in view-transition
```js
//get direction
const galleryPath = '/05-images/solution/index.html';
const catsPath = `/05-images/solution/cats/`;

function getNavigationType(fromPath, toPath) {
    if (fromPath.includes(catsPath) && toPath.includes(galleryPath)) {
        return 'cat-page-to-gallery';
    }

    if (fromPath.includes(galleryPath) && toPath.includes(catsPath)) {
        return 'gallery-to-cat-page';
    }

    return 'other';
}
```

before transition
```js
  let targetThumbnail;

  if (navigationType === 'gallery-to-cat-page') {
    targetThumbnail = getLink(toPath).querySelector('img');
    targetThumbnail.style.viewTransitionName = 'banner-img';
  }
```

in transition
```js
if (navigationType === 'cat-page-to-gallery') {
    targetThumbnail = getLink(fromPath).querySelector('img');
    targetThumbnail.style.viewTransitionName = 'banner-img';
}
```

after transition
```js
 transition.finished.finally(() => {
    // Clear the temporary tag
    if (targetThumbnail) targetThumbnail.style.viewTransitionName = '';
  });
```
