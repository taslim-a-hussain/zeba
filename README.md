# Zeba
A lightweight JavaScript library for validating, manipulating, and formatting strings.

## Install:
> npm i zeba

### Require:
> `const` zeba = `require`(`'zeba'`);

### How to use:
#### _Example:_
> `let` input = '&nbsp;&nbsp;&nbsp;&nbsp;this&nbsp;&nbsp;&nbsp; is the&nbsp;&nbsp;&nbsp;&nbsp; input.';
>
> input = `new` zeba(input).fullTrim().capitilize();
>
> `console.log`(input.`string`);
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
    > `let` text = `'  this is     the text.'`;
    >
    > text = `new` zeba(text).`fullTrim`();
    >
    > `console.log`(text.`string`);
    * outputs:
    `this is the text.`