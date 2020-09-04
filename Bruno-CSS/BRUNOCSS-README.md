# Bruno CSS

## v1.0

Bruno CSS provides correct alignments for your elements. It does not provide color in the .min.css file. Later updates will have color.

Exmaple with Bruno CSS:

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="https://brunozhon.github.io/Bruno-CSS/brunocss.min.css">
  </head>
  <body>
    <div class="bruno bruno-container">
      <div class="bruno bruno-quarter bruno-inline">
        <h3>Menu</h3>
      </div>
      <div class="bruno btuno-three-quarter bruno-inline">
        <p>Bruno containers add a 16px left and right padding. I used Bruno CSS and it was much simpler.</p>
        <img src="URL" alt="Some text, some text..." class="bruno bruno-block" />
      </div>
    </div>
  </body>
</html>
```

Example without Bruno CSS:

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .container {
        magrin-right: 16px;
        magrin-left: 16px;
      }
      /*All of the CSS... too tired!*/
      .block {
        display: block;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <p>I am so tired I will start agian tommorow...</p>
    </div>
  </body>
</html>
```

Bruno CSS makes you design a reusable webpage.

So, how many times do you think you need to type the `style=""` attribute.

A lot? I think so.

And are you tired if you type a LOT of things in the `<style></style>` tag?

Yes? I think so. 

So don't quit and don't rest. Why?

Cause Bruno CSS will shorten you CSS coding.

It can fix some of your problems:

- How to make a container using correct alignments?
- How to make a element with diffrent sizes and more flexible including:
  - One eigth
  - One quarter
  - One quarter-eigth
  - One half
  - One half-eigth
  - Three quarters
  - One whole minus one eigth
  - One whole
- How to turn block elements inline and inline elements block?
