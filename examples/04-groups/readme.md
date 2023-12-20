# 04 - Groups and images

## Animate header transform separately
You can animate transforms separately using by defining name of transition for element.

Try animate header component separately (`.main-header`). 

```css
view-transition-name: main-header;
```

same thing we can do for header text
```css
.main-header {
  view-transition-name: main-header;
}

.main-header-text {
  view-transition-name: main-header-text;
  width: fit-content;
}
```

you can chage animatin for each transition name by 
```css
::view-transition-old(main-header),
::view-transition-new(main-header) {
  animation: /*..*/
}
```
