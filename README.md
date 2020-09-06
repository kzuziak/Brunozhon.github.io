# Brunozhon.github.io

My first project with a .io

Try it: [https://brunozhon.github.io](https://brunozhon.github.io).

## BrunoScript realeases

### BrunoScript intro

BrunoScript is not a proggraming languge.

It is a JavaScript libary to simplfy complex functions.

### Donload Steps

1. Donload one or more of the files in the BrunoScript folder.
2. When donload is complete, add a link to it with the folling suggestions:
  - If the file is stored at the same folder as your file, do this: *`filename.fileextensiton`*
  - If the file is stored away from the root in a folder, do this *`/foldername/filename.fileextension`* or this *`protocol://directory/foldername/filename.fileextension`*
  - If the file is stored at the root, do this: *`/filename.fileextension`* or this *`protocol://directory/filename.fileextension`*
3. Once you do that, you can use BrunoScript anywhere, anytime!

### Use from brunozhon.github.io steps

1. Add a link like this to one of my brunoscript files: `https://brunozhon.github.io/BrunoScript/`*`filename.fileextension`*
2. Now you can use BurnoScript anywhere, anytime!

### Sharing / Uploading Steps

1. Donload one or more of my files in the BrunoScript folder.
2. Upload the file(s) as you would in you computer.

### Diffrent programming languges

#### HTML / XHTML

Add the tag in HTML:

```html
<script src="URL"></script>
```

#### JavaScript

Add this code:

```javascript
import URL;
```
### Using BrunoScript

#### HTML / XHTML

```html
<script src="URL"></script>
<script>
  //Some code
</script>
```

or

```html
<!-- Import BrunoScript -->
<script src="URL"></script>
<!-- Use BrunoScript -->
<script src="URL"></script>
```

#### JavaScript

```javascript
import URL;
//Some code
```

or

```javascript
//Import BrunoScript
import URL;
//Use from a external file
import URL;
//Some code
```

### Examples of BrunoScript

#### Corect:

BrunoScript set() function

```javascript
import 'https://brunozhon.github.io/BrunoScript/brunoscript.min.js';
set("Name", "John Doe");
```

BrunoScript get() function

```javascript
import 'https://brunozhon.github.io/BrunoScript/brunoscript.min.js';
set("Name", "John Doe");
console.log("His name is " + get("Name"))
```

#### Wrong:

BrunoScript set() function

```javascript
import 'https://brunozhon.github.io/BrunoScript/brunoscript.min.js';
set(3, "Bruno") //Error!
```

BrunoScript get() function

```javascript
import 'https://brunozhon.github.io/BrunoScript/brunoscript.min.js';
console.log(get("Date")) //Error!
console.log(get(3)) // Error!
set("Today", "Monday")
console.log(get("today")) // Error!
```

##### Warning!

The **import** function is diffrent from **inport**

```javascript
inport 'https://brunozhon.github.io/BrunoScript/brunoscript.min.js'; //Error!
```

JavaScript will problay think it is:

```javascript
inport; 'https://brunozhon.github.io/BrunoScript/brunoscript.min.js'; //Closed after inport and the string
```

Or it will throw a error. Note: Errors will be diffrent in diffrent browsers. Try **Google Chrome** and **Safari**.

### BrunoScript examples

You can add the code `import 'https://brunozhon.github.io/BrunoScript/brunoscript.min.js';` to make your first brunoscript application!

#### First BrunoScript application

Add a new file and write this:

```javascript
set("msg", "Hello world!");
document.write("This is a example where you 'write' javascript into HTML:<br>");
document.write(get("msg"));
```

It will print:
```
This is a example where you 'write' javascript into HTML:

Hello world!
```
#### This example is diffrent... it is using the CLI 

Save the file from the last example `helloworld.js`

Add a new file and write this:

```javascript
import 'helloworld.js';
console.warn("Notice: The example added is in the CLI. The rest are imported.");
console.log("This example is diffrent.");
console.log("This example is using the CLI and will print:");
console.log(get("msg"));
```

It will print:
```
This is a example where you 'write' javascript into HTML:

Hello world!
```
But when they press `F12`:
```
Notice: The example added in in the CLI. The rest are imported.

This example is diffrent.

This example is using the CLI and will print:

Hello world!
```

### The `document.write()` function vs. BrunoScript

The `document.write()` method is the easist way of writing in HTML but not a good practice.

It can overwrite existing HTML after the page is loaded.

Use the `document.getElementById()` method instead.

#### See the diffrences bettwen `document.write()` and `document.getElementById()`

Rule|`document.write()`|`document.getElementById()`
----|------------------|---------------------------
Writing|Writes to the bottom of your page | Writes to the specifcied ID
Won't work|Never|If the ID is not found
Overwites|If you use it on a loaded HTML page|Never
Writes on new line|Never|Depending on the HTML element
Type|` `|`[object HTMLCollection]`
Font size|Default (Most of the time, 16px)|Depending on the element 
Uses|Writes to the page|Writes to the page, changes font style, changes color, etc.
Can be assigned to a varible|No|Yes
Can return `null` or `undefined`|No|If the ID is not found
Can overwrite elements/document content|If you use on a loaded HTML page|If you use `=` rather than `+=`

#### How about `document.qureySelectorAll()`, `document.getElementById()` vs. `document.write()`

Let's change the heading to: "How about `document.getElementById()`~,~**vs.** `document.getElementById`~vs. `document.write()`~"

Rule|`document.qureySelectorAll`|`document.getElementById`
----|---------------------------|------------------------
Writing|Writes to the spcified element or element.className|Writes to the spcified ID
Won't work|If the element or element.className is not found|If the ID is not found
Overwrites|Never|Never
Writes on new line|Depending on the element|Depending on the element
Type|`[object NodeList]`|`[object HTMLColection]`
Font size|Depending on the element|Depending on the element
Uses|Writes to the page, changes the font style, changes color, etc.|Writes to the page, changes the font style, changes color, etc.
Can be assigned to a varible|Yes|Yes
Can return `null` or `undefined`|If the element or element.className in not found|If the ID is not found
Can overwrite elements content|If you use `=` instead of `+=`|If you use `=` instead of `+=`

## Bruno Icons

Bruno icons are SVG files.

You can show our icons by this syntax: `https://brunozhon.github.io/Icons/`*`iconname`*`.svg`

### Using icons in the `<svg></svg>` element


A icon icon:

```svg
<svg xmlns="http://www.w3.org/2000/svg">
  <use xlink:href="https://brunozhon.github.io/Icons/icon.svg" />
</svg>
```

A text-rotate icon:

```svg
<svg xmlns="http://www.w3.org/2000/svg">
  <use xlink:href="https://brunozhon.github.io/Icons/text-rotate.svg" />
</svg>
```

### Using icons in HTML (`<svg></svg>`)

A icon icon:

```html
<html>
  <body>
    <svg>
      <use xlink:href="https://brunozhon.github.io/Icons/icon.svg" />
    </svg>
  </body>
</html>
```

A text-rotate icon:

```html
<html>
  <body>
    <svg>
      <use xlink:href="https://brunozhon.github.io/Icons/text-rotate.svg" />
    </svg>
  </body>
</html>
```

*Since you know how to use the `<img>` element, we're going to skip it*

### WARNING!

SVG is based on XML, so these 2 examples store the same info:

SVG:

```svg
<svg xmlns="http://www.w3.org/2000/svg">
  <use xlink:href="https://brunozhon.github.io/Icons/icon.svg" />
</svg>
```

XML:

```xml
<svg xmlns="http://www.w3.org/2000/svg">
  <use xlink:href="https://brunozhon.github.io/Icons/icon.svg" />
</svg>
```

...but **only** the SVG example displays a graphic.

Also, SVG elements need to be closed like this:

Open element: `<tagname>content</tagname>`

Closed element: `<tagname />`

Correct:

```svg
<svg>
  <text>I love SVG!
    <animate attributeName="color" attributeType="CSS" from="black" to="white" begin="1s" dur="5s" />
  </text>
</svg>
```
