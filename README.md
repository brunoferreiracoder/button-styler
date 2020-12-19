# button-styler

This script is a simple tool to stylize the HTML button tags based on their classes.

## HTML code example:

```
<button class="btn btn-green btn-block">Submit</button>

<button class="btn btn-green btn-lg btn-rounded">Submit</button>

<button class="btn btn-outline-green">Submit</button>

<button class="btn btn-outline-green btn-lg btn-rounded">Submit</button>

<button class="btn btn-outline-link btn-block">Submit</button>
```

### This will display
![Example](example.gif)

### All styles and combinations
![Styles and combinations](example.png)

## You can add more styles if you follow the logic of the STYLE constant

```
const STYLE = {
  // ...default style...
  'btn-pink': {
    'background-color': 'pink'
  }
}
```

## There are the following styles that you can use
**Note: the "btn" class is mandatory if you want to use the script styles.**
### Rectangular button, no edges, not round.
```
.btn-green
.btn-red
.btn-orange
.btn-blue
.btn-link // This does not show the background
```
### By default no background-color, but shows the background-color when mouseover.
```
.btn-outline-green
.btn-outline-red
.btn-outline-orange
.btn-outline-blue
.btn-outline-link
```
### These can be used together with the top classes:

#### Shows a button smaller than the default.
`.btn-sm`
#### Shows a button bigger than the default
`.btn-lg`
#### Shows a button that occupies 100% of his container
`.btn-block`
#### Shows a rounded button.
`.btn-rounded`
## You can change the font of the letter in the STYLE constant or in the CSS:
```
.btn {
  font-family: FontName;
}
```
**or**
```
const STYLE = {
  'btn': {
    'font-family': 'FontName'
  }
}
```
## I picked up the colors from the following sites:

_https://flatuicolors.com/palette/de_

_https://coolors.co/ef476f-ffbc1f-05c793-139fcd-052b38_

**_And, obviously, I got inspired by Bootstrap (:_**
