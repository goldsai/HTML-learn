// alert('Привет.');
console.log('"" + 1 + 0: ', "" + 1 + 0);
console.log('"" - 1 + 0: ', "" - 1 + 0);
console.log('true + false: ', true + false);
console.log('6 / "3": ', 6 / "3");
console.log('"2" * "3": ', "2" * "3");
console.log('4 + 5 + "px": ', 4 + 5 + "px");
console.log('"$" + 4 + 5: ', "$" + 4 + 5);
console.log('"4" - 2: ', "4" - 2);
console.log('"4px" - 2: ', "4px" - 2);
console.log('7 / 0: ', 7 / 0);
console.log('"  -9  " + 5: ', "  -9  " + 5);
console.log('"  -9  " - 5: ', "  -9  " - 5);
console.log('null + 1: ', null + 1);
console.log('undefined + 1: ', undefined + 1);
console.log('" \t \n" - 2: ', " \t \n" - 2);

//типы данных
// скалярные
let num=5;
let num2 = 5.00345;

let string ='строка';
let string2 = "строка";
let phrase = '"sdf" можно использовать двойные кавычки, которые используются в HTML и CSS';
let template = ``

let bool = true;
let bigInt = 34535n;
let symbol = Symbol();

let donutHole = null;

//сложные, объекты и массивы

let object = {};
let array = [];
let func = function(){};

let regExp = /D/g;//new RegExp();
let error = new Error();
let date = new Date();
let map = new Map();
let set = new Set();

const printEl=() =>{
   console.log(typeof num);
   console.log(typeof string);
   console.log(typeof bool);
   console.log(typeof bigInt);
   console.log(typeof symbol);
   console.log(typeof donutHole);
   console.log(typeof object);
   console.log(typeof array);
   console.log(typeof func);
   console.log(typeof regExp);
   console.log(typeof error);
   console.log(typeof date);
   console.log(typeof map);
   console.log(typeof set);
   // console.log(typeof);
}

printEl();

const head = document.getElementsByTagName('h1');
console.log('head: ', head);
