"use strict";

// ------------------ Основы ООП л23 ------------------

// let str = 'some';
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1, 2, 3]);

// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function() {
//         console.log('Hello');
//     }
// };

// const john = Object.create(soldier);

// // const john = {
// //     health: 100
// // };

// //john.__proto__ = soldier;   // устаревший

// //Object.setPrototypeOf(john, soldier);

// // console.log(john);
// // console.log(john.armor);
//  john.sayHello();

// ---------------- Ошибки в коде л25 ---------------

// function hello() {
//   console.log("Hello World!");
//   debugger;
// }

// hello();

// function hi() {
//   console.log("Say hi!");
// }

// hi();

// let arr = [1, 14, 4, 30, 54],
//     sorted = arr.sort(compareNum);

// function compareNum(a, b) {
//   return a - b;
// }

// console.log(sorted);

// -------------------- Динам типизация л26 ---------------

// To String

// 1)
console.log(typeof(String(null)));
console.log(typeof(String(4)));

// 2)
console.log(typeof(5 + ''));

const num = 5;

console.log('https//vk.com/catalog/' + num);

const fontSize = 27 + 'px';
console.log(fontSize);


// To number

// 1)
console.log(typeof(Number('4')));

// 2)
console.log(typeof(+ '5'));

// 3)
console.log(typeof(parseInt('15px', 10)));

//let answ = +prompt('Hello', '');


// To boolean

// 0, '', null, undefined, NaN;     --- false

// 1)
let switcher = null;

if (switcher) {
    console.log('Working...');
}

switcher = 1;

if (switcher) {
    console.log('Working...');
}

// 2)
console.log(typeof(Boolean('4')));

// 3)
console.log(typeof(!!'4444'));


// ---------- Задачи из собеседований л27 ---------------

// Какое будет выведено значение: let x = 5; alert( x++ ); ?    //  -- 5

// Чему равно такое выражение: [ ] + false - null + true ?
// console.log([ ] + false - null + true);
// console.log(typeof([ ] + false));       // "false"
// console.log([ ] + false);       // "false"
// console.log([ ] + false - null);     // NaN

// Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?   // --- 2

// Чему равна сумма [ ] + 1 + 2?     // "12"

// Что выведет этот код: alert( "1"[0] )?    // -- 1
// alert( "12345"[3] )    //  -- 4

//	Чему равно 2 && 1 && null && 0 && undefined ?     // --- null

// Есть ли разница между выражениями? !!( a && b ) и (a && b)?      //  -- Yes

// Что выведет этот код: alert( null || 2 && 3 || 4 ); ?     // --- 3

// a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?     // No, это разные переменные с одинаковыми содержанием

// Что выведет этот код: alert( +"Infinity" ); ?

// Верно ли сравнение: "Ёжик" > "яблоко"?      // -- No 

// Чему равно 0 || "" || 2 || undefined || true || falsе ?  // -- 2
