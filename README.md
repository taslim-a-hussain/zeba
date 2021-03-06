# Zeba
A very lightweight JavaScript library for taking out extra spaces in a string, can make first letter of a string, first letter of each words in a string or all letters in a string to uppercase.

## Install:
`npm i zeba`

### Require:
`const zeba = require('zeba');`

### How to use:
#### _Example:_
`let input = '`&nbsp;&nbsp;&nbsp;&nbsp;this&nbsp;&nbsp;&nbsp; is the&nbsp;&nbsp;&nbsp;&nbsp; input.`';`

`input = zeba(input).fullTrim().capitilize().value();`

`console.log(input);`

* Use `value()` to get the value.

#### _Outcome:_
This is the input.

____

#### API
##### Methods:
* `capitilize()`
    * Example: this is the text -> This is the text.
* `upper()`
    * from: this is the text -> This Is The Text.
* `allupper()`
    * from: this is the text -> THIS IS THE TEXT.
* `fullTrim()`
    * fully trims the string from front, back and in betweens.
    > `let text = '` &nbsp;&nbsp;this&nbsp;&nbsp; is&nbsp;&nbsp;&nbsp;the text.&nbsp;&nbsp;`'; `
    >
    > `text = zeba(text).fullTrim().value();`
    >
    > `console.log(text);`
    * outputs:
    `this is the text.`