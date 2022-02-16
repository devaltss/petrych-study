"use strict";

// ---------------- Классы л47 ----------

// class Rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }

//     calcArea() {
//         return this.height * this.width;
//     }
// }

// class ColoredRectangleWithText extends Rectangle {
//     constructor(height, width, text, bgColor) {
//         super(height, width);
//         this.text = text;
//         this.bgColor = bgColor;
//     }

//     showMyProps() {
//         console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
//     }
// }

// const div = new ColoredRectangleWithText(25, 10, 'Hello World', 'grey');

// div.showMyProps();
// console.log(div.calcArea());

// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);

// console.log(square.calcArea());
// console.log(long.calcArea());


// ---------- Rest оператор и парамет по умолч л49 ---------------

const log = function(a, b, ...rest) {             // rest можно назвать как угодно
    console.log(a, b, rest);
}

log('basic', 'rest', 'operator', 'usage', 'any');

function calcOrDouble(number, basis = 2) {
    //basis = basis || 2;
    console.log(number * basis);
}

calcOrDouble(3);



