
//const divide = 2000 / 100;


// const divide = (num1, num2) => num1 / num2;
// divide(2000, 100);
// console.log(divide)

// function divide(numerator,demoninator) {
//     let division = numerator / demoninator
//     return division
// }

const divide = function(numerator = 2000,denominator = 100) {
    return numerator / denominator
}
console.log(divide)

const square = x => x ** 2

const add = (x, y) => x + y