"use strict";

// ---------------- Регулярные выражения л65 ----------

// new RegExp('pattern', 'flags');
// /pattern/f

//const ans = prompt('Введите ваше имя');
// const ans = prompt('Введите ваше число');

// //const reg = /n/ig;
// const reg = /\d/g;
// //console.log(reg.test(ans));
// console.log(ans.match(reg));

//const str = 'My name is R2D2';

//console.log(str.match(/\w\d\w\d/i));
//console.log(str.match(/\W/ig));
//console.log(str.match(/\D/ig));

//  \D   // не цифры
//  \W   // не буквы

//   \d
//   \w
//   \s

// // i
// // g
// // m

// //console.log(ans.search(reg));
// console.log(ans.match(reg));

// const pass = prompt('Password');

// console.log(pass.replace(/./g, "*"));
// console.log(pass.replace(/\./g, "*"));

//console.log('12-34-56'.replace(/-/g, ':'));


// ---------- Геттеры и сеттеры л68 ------------

const persone = {
    name: "Alex",
    age: 25,

    get userAge() {
        return this.age;
    },

    set userAge(num) {
        this.age = num;
    }
}

console.log(persone.userAge = 30);
console.log(persone.userAge);



