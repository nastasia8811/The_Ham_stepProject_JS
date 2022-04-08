//
//
// const getUserNumber = function(firstNumber = +prompt("Введіть число № 1"), secondNumber = +prompt("Введіть число № 2")){
// }
// getUserNumber(firstNumber, secondNumber);
//
// const mathematicalOperation = function(firstNum,userChoice= +prompt('Виберіть математичну операцію:  + ,  - , * , /'), secondNum) {
//     if (userChoice === '+') {
//         return '+';
//     } else if (userChoice === '-') {
//         return '-';
//     } else if (userChoice === '*') {
//         return '*';
//     } else if (userChoice === '/') {
//         return '/';
//     }
//     mathematicalOperation(firstNumber, userChoice, secondNumber);

//
// const getMathematicalOperation = () => {
//
// }


// const firstNumber = +prompt("Введіть число № 1");
// const secondNumber = +prompt("Введіть число № 2");
// const userChoice = prompt('Виберіть математичну операцію:  + ,  - , * , /');
//  const resultOfExecution = function (firstNum, choice, secondNum){
//      if (choice === '+'){
//          return '+';
//      } else if (choice === '-'){
//          return '-';
//      } else if (choice === '*'){
//          return '*';
//      } else if (choice === '/'){
//          return '/';
//      }
//  }
// resultOfExecution (firstNumber, userChoice, secondNumber);

const firstNumber = +prompt("Введіть число № 1");
const secondNumber = +prompt("Введіть число № 2");
const userChoice = prompt('Виберіть математичну операцію:  + ,  - , * , /');

const resultOfExecution = function (firstNum, choice, secondNum){
    if (choice === '+'){
        return 'firstNum + secondNum';
    } else if (choice === '-'){
        return 'firstNum - secondNum';
    } else if (choice === '*'){
        return 'firstNum * secondNum';
    } else if (choice === '/'){
        return 'firstNum / secondNum';
    }
}
resultOfExecution (firstNumber, userChoice, secondNumber);
console.log(firstNumber + userChoice + secondNumber)


//     return +firstNumber + +secondNumber
//     // if(isNaN(+a) || isNaN(+b) || a === null || b === null || a === "" || b === ""){
//     //     a = prompt("enter first number:")
//     //     b = prompt("enter second number:")
//     // }
// }
// console.log(sum());

//  const getMathematicalOperation = () => {
//     let userChoice;
//
//     do {
//         userChoice = prompt('Выберите математическую операцию: '+', '-', '*', '/'', userChoice);
//     }
//
//     while (userChoice !== '+' && userChoice !== '-' && userChoice !== '*' && userChoice !== '/');
//
//     return userChoice;
// }


// const squareArea = () => {
//     const plus = getNumber("Enter the edge")
//     return edge**2;
// }
//
// const rectangleArea = () => {
//     const firstEdge = getNumber("Enter first edge");
//     const secondEdge = getNumber("Enter second edge");
//     return firstEdge * secondEdge;
// }
//
// const triangelArea = () => {
//     const firstEdge = getNumber("Enter first edge");
//     const secondEdge = getNumber("Enter second edge");
//     const angle = getNumber("Enter angle");
//     return (firstEdge * secondEdge * Math.sin(angle))/2;
// }
//
//
// const circleArea = () => {
//     const radius = getNumber("Enter radius");
//     return (radius**2 * Math.PI);
// }


//
// function valideidIsNumber(userNumber){
//     if (isNaN(+userNumber) || userNumber === null || userNumber === ""){
//         return false
//     }
//     return true
// }
//
// function getUserNumber(massage = 'enter number'){
//     let  userNumber = null;
//     do {
//         userNumber = prompt(massage)
//     } while(!valideidIsNumber(userNumber))
//
//     return userNumber
// }
//
// function sum(){
//     const firstNumber = getUserNumber('enter first number')
//     const secondNumber = getUserNumber('enter second number')
//
//     return +firstNumber + +secondNumber
//     // if(isNaN(+a) || isNaN(+b) || a === null || b === null || a === "" || b === ""){
//     //     a = prompt("enter first number:")
//     //     b = prompt("enter second number:")
//     // }
// }
// console.log(sum());
//
//
// const getFigure = () => {
//     let userChoice;
//
//     do	 {userChoice = prompt("Введите фигуру. Один из: 'квадрат', 'треугольник', 'прямоугольник', 'круг'",userChoice)}
//
//     while(userChoice !== 'квадрат' && userChoice !== 'треугольник' && userChoice !== "прямоугольник" && userChoice !=="круг")
//
//     return userChoice;
// }
//
//
// const getNumber = (message) => {
//     let userNumber;
//
//     do {userNumber = prompt(message, userNumber)}
//     while(isNaN(+userNumber) || userNumber === '')
//     // while(isNaN(+userNumber) && userNumber !== '' && userNumber !== null)
//
//     return +userNumber;
// }
//
// const squareArea = () => {
//     const edge = getNumber("Enter the edge")
//     return edge**2;
// }
//
// const rectangleArea = () => {
//     const firstEdge = getNumber("Enter first edge");
//     const secondEdge = getNumber("Enter second edge");
//     return firstEdge * secondEdge;
// }
//
// const triangelArea = () => {
//     const firstEdge = getNumber("Enter first edge");
//     const secondEdge = getNumber("Enter second edge");
//     const angle = getNumber("Enter angle");
//     return (firstEdge * secondEdge * Math.sin(angle))/2;
// }
//
//
// const circleArea = () => {
//     const radius = getNumber("Enter radius");
//     return (radius**2 * Math.PI);
// }

