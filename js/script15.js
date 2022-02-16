"use strict";

// ---------------- Делегирован событий л37 ----------

// const btns = document.querySelectorAll('button'),
//       wrapper = document.querySelector('.btn-block');

//console.log(btns[0].classList.length);
//console.log(btns[0].classList.item(1));
//console.log(btns[1].classList.add('red'));
//console.log(btns[0].classList.remove('blue'));
//console.log(btns[0].classList.toggle('blue'));

//if (btns[0].classList.contains('blue')) {
// if (btns[1].classList.contains('red')) {
//     console.log('red');
// }

// btns[0].addEventListener('click', () => {
//     // if (!btns[1].classList.contains('red')) {
//     //     btns[1].classList.add('red');
//     // } else {
//     //     btns[1].classList.remove('red');
//     // }

//     btns[1].classList.toggle('red');
//     btns[2].classList.toggle('green');
// });

//console.log(btns[0].className);   // устарело


// wrapper.addEventListener('click', (event) => {
//     //if (event.target && event.target.tagName == "BUTTON") {
//     //if (event.target && event.target.classList.contains('blue')) {
//     if (event.target && event.target.matches("button.green")) {
//         console.log('Hello');
//     }
// });

// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         console.log('Hilloo');
//     });
// });

// const btn = document.createElement('button');
// btn.classList.add('green');
// wrapper.append(btn);

//  --------------- Скрипты и время л39 --------------------

// const timerId = setTimeout(function(text) {

// //}, 2000, 'Kyyy!');
// }, 2000);

// const btn = document.querySelector('.btn');
// let timerId,
//     i = 0;

// function myAnimation() {
//     const elem = document.querySelector('.box');
//     let pos = 0;

//     const id = setInterval(frame, 10);
//     function frame() {
//         if (pos == 300){
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + "px";
//             //elem.style.top = `${pos}px`;
//             elem.style.left = `${pos}px`;
//         }
//     }

// }

// btn.addEventListener('click', myAnimation);

// btn.addEventListener('click', () => {
//     //const timerId = setTimeout(logger, 2000);
//     timerId = setInterval(logger, 1000);
// });

//const timerId = setTimeout(logger, 2000);
//setTimeout(logger, 2000); 

//clearInterval(timerId);

// function logger() {
//     if (i === 3) {
//         clearInterval(timerId);
//     }
//     console.log('text');
//     i++;
// }


// let id = setTimeout(function log() {
//     console.log('Kyyy!');
//     id = setTimeout(log, 10000);
// }, 500);


// --------------------- Даты л40 -----------

//const now = new Date('2022-02-13');
//const now = new Date(2022, 2, 12, 20);
//const now = new Date(0);
//const now = new Date(-999999999999);
//const now = new Date();
//const now = new Date('2022-02-15');
//new Date.parse('2022-02-15');

//console.log(now);
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getUTCHours());

//console.log(now.getTimezoneOffset());
//console.log(now.getTime());

//console.log(now.setHours(40));
//console.log(now);

// let start = new Date();

// for (let i = 0; i < 100000; i++){
//     let some = i ** 3;
// }

// let end = new Date();

// //alert(`Цикл отработал за ${end - start} миллисекунд`)
// console.log(`Цикл отработал за ${end - start} миллисекунд`)


// ---------- Ф-ции-конструкторы л45 --------------

//const num = new Number(3);
// const num = new Function(3);   // устарело
// console.log(num);

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log(`Kyy: ${this.name}`);
//     };
// }

// class User {
//     constructor(name, id) {
//         this.name = name;
//         this.id = id;
//         this.human = true;
//     }
//     hello(){
//         console.log(`Kyy: ${this.name}`);
//     }
//     exit() {
//         console.log(`Пользователь ${this.name} ушел`);
//     }
// }

// User.prototype.exit = function() {
//     console.log(`Пользователь ${this.name} ушел`);
// };

// const ivan = new User('Ivan', 28);
// const alex = new User('Alex', 20);

// ivan.exit();

// ivan.hello();
// alex.hello();

// console.log(ivan);
// console.log(alex);


// ---------------- Контекст this л46 ----------

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }

//     console.log(sum())
// }
// showThis(4, 5);

// const obj = {
//    a: 20,
//    b: 15,
//    sum: function() {
//        console.log(this);
//        function shout() {
//            console.log(this);

//        }
//        shout();
//    } 
// };
// obj.sum();

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log(`Kyy: ${this.name}`);
//     };
// }
// let ivan = new User('Ivan', 23);

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'John'
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count(num) {
//     return this * num;
// }

// const double = count.bind(2);
// console.log(double(3));
// console.log(double(13));

// 1) Обычная ф-ция: this = window, но если use strict - undefined
// 2) Контекст у методов объекта - сам объект
// 3) this в конструкторах и классах - это новый экземпляр объекта
// Ручная привязка this: call, apply, bind

const btn = document.querySelector('button');

//btn.addEventListener('click', function() {
//btn.addEventListener('click', () => {    // нет контекста
btn.addEventListener('click', (e) => {    
    //this.style.backgroundColor = 'red';
    e.target.style.backgroundColor = 'red';
    console.log(this);
});

const obj = {
    num: 5,
    age: 34,
    sayNamber: function() {
        const say = () => {
            console.log(this);
            console.log(this.num);
            console.log(this.age);
        };

        say();
    }
}

obj.sayNamber();

// const double = (a) => {
//     return a * 2;
// };

const double = a => a * 2;  // то же самое
//const double = (a, b) => a * 2 + b; 
console.log(double(4));
