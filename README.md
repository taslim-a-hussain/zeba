![GitHub issues](https://img.shields.io/github/issues/taslim-a-hussain/zeba?style=for-the-badge)
![GitHub stars](https://img.shields.io/github/stars/taslim-a-hussain/zeba?style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/taslim-a-hussain/zeba?style=for-the-badge)
![npm](https://img.shields.io/npm/dt/zeba?style=for-the-badge)
![npm](https://img.shields.io/npm/v/zeba?style=for-the-badge)
![Dependency](https://img.shields.io/badge/Zero%20Dependency-Yes-green?style=for-the-badge)
![GitHub](https://img.shields.io/github/license/taslim-a-hussain/zeba?style=for-the-badge)


# Zeba
A very lightweight JavaScript library for taking out extra spaces in a string.

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
