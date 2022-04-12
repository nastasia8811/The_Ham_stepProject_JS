// 1) Функції потрібні для того, щоб не дублювати код
// 2) аргумент - це значення яке передається параметру.
// в одну функцію можна передати багато аргументів
// 3) За допомогою інструкції return функція може повернути деяке значення
// (результат роботи функції) програмі, яка її викликала.
// Значення, що повертається, передається в точку виклику функції.


const firstNumber = +prompt("Введіть число № 1");
const secondNumber = +prompt("Введіть число № 2");
const choice = prompt('Виберіть математичну операцію:  + ,  - , * , /');


const resultOfExecution = function (firstNum, userChoice, secondNum){

    if (userChoice === '+'){
        return firstNum + secondNum;
    } else if (userChoice === '-'){
        return firstNum - secondNum;
    } else if (userChoice === '*'){
        return firstNum * secondNum;
    } else if (userChoice === '/'){
        return firstNum / secondNum;
    }
};
resultOfExecution (firstNumber, choice, secondNumber);
console.log(resultOfExecution(firstNumber , choice , secondNumber));




// const firstNumber = +prompt("Введіть число № 1");
// const secondNumber = +prompt("Введіть число № 2");
// const choice = prompt('Виберіть математичну операцію:  + ,  - , * , /');
//
//
// const resultOfExecution = function (firstNum, userChoice, secondNum){
//
//     if (choice === '+'){
//         return firstNumber + secondNumber;
//     } else if (choice === '-'){
//         return firstNumber - secondNumber;
//     } else if (choice === '*'){
//         return firstNumber * secondNumber;
//     } else if (choice === '/'){
//         return firstNumber / secondNumber;
//     }
// };
// resultOfExecution (firstNumber, choice, secondNumber);
// console.log(resultOfExecution(firstNumber , choice , secondNumber));