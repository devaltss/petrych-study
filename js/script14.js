"use strict";

// ------------------ Получение элементов со страницы л28 ------------------

// const box = document.getElementById('box');
// console.log(box);

// const btns = document.getElementsByTagName('button');
// const btnss = document.getElementsByTagName('button')[1];
// console.log(btns[1]);
// //console.log(btns);
// console.log(btnss);

// const circles = document.getElementsByClassName('circle');
// console.log(circles);

// const hearts = document.querySelectorAll('.heart');
// //console.log(hearts);

// hearts.forEach(item => {
//     console.log(item);
// });

// const oneHeart = document.querySelector('.heart');   // выводит только первый попавшийся элемент
// console.log(oneHeart);

// --------------- Действия с элем на странице л29 ------------

// const box = document.getElementById('box'),
//       btns = document.getElementsByTagName('button'),
//       circles = document.getElementsByClassName('circle'),
//       wrapper = document.querySelector('.wrapper'),
//       //hearts = document.querySelectorAll('.heart'),
//       hearts = wrapper.querySelectorAll('.heart'),
//       //oneHeart = document.querySelector('.heart'),
//       oneHeart = wrapper.querySelector('.heart');

// // box.style.backgroundColor = 'blue';
// // box.style.width = '500px';

// box.style.cssText = 'background-color: green; width: 600px';
// //box.style.cssText = `background-color: green; width: ${num}px`;  // так тоже можно

// btns[1].style.borderRadius = '100%';
// //circles.style.backgroundColor = 'red';     // -- no
// circles[0].style.backgroundColor = 'red';

// // for (let i = 0; i < hearts.length; i++) {
// //     hearts[i].style.backgroundColor = 'blue';
// // }

// hearts.forEach(item => {
//     item.style.backgroundColor = 'gray';
// });


// const div = document.createElement('div');
// // const text = document.createTextNode('I was here');   // используется редко

// div.classList.add('black');

// document.body.append(div);
// //document.querySelector('.wrapper').append(div);   // if used once
// wrapper.append(div);
// //wrapper.prepend(div);

// //hearts[1].before(div);
// //hearts[1].after(div);

// //circles[1].remove();     // deleting an element

// hearts[0].replaceWith(circles[0]);    // element replacement     

// //  --- Устаревшие команды --
// //wrapper.appendChild();
// //wrapper.insertBefore(div, hearts[2]);
// //wrapper.removeChild(hearts[1]);  // deleting an element
// //wrapper.replaceChild(circles[0], hearts[0]);    // element replacement  
// // ------------------------


// div.innerHTML = "<h2>Hello World</h2>";  // adding an element
// //div.textContent = "Helloo";

// div.insertAdjacentHTML('afterend', '<h3>Hello</h3>');   // вставка элемента


// ------------- События на моб устр-вах л34 ----------------

// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcansel

// window.addEventListener('DOMContentLoaded', () => {
//     const box = document.querySelector('.box');

//     box.addEventListener('touchstart', (e) => {
//         e.preventDefault();

//         console.log('Start');
//         //console.log(e.touches);
//         console.log(e.targetTouches);
//     });

//     box.addEventListener('touchmove', (e) => {
//         e.preventDefault();

//         //console.log('Move');
//         console.log(e.targetTouches[0].pageX);
//     });

//     // box.addEventListener('touchend', (e) => {
//     //     e.preventDefault();

//     //     console.log('End');
//     // }); 
    
// });

// touches
// targetTouches
// changedTouches

// ----------------- Динамические скрипты л35 ----------------

const p = document.querySelectorAll('p');
console.log(p);


function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.body.append(script);

}

loadScript("js/test.js");
loadScript("js/some.js");
