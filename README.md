pageRemember
============

Uses local storage to remember page scroll location.
This is useful for long form articles, if a user leaves and returns to the page it will remember their spot.

## How to use it
Include pageRemember.js in page head.

```
var remember = new pageRemember();

remember.remember();
console.log(remember.getPosition());
```

## Methods
* .remember(); *

Automatically go to last position on the page.

* .getPosition(); *

Get Y location of scroll