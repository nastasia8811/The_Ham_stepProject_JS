const firstNumber = +prompt("Введіть число № 1");
const secondNumber = +prompt("Введіть число № 2");
const choice = prompt('Виберіть математичну операцію:  + ,  - , * , /');


const resultOfExecution = function (firstNum, userChoice, secondNum){

    if (userChoice === '+'){
        return 'firstNum + secondNum';
    } else if (userChoice === '-'){
        return 'firstNum - secondNum';
    } else if (userChoice === '*'){
        return 'firstNum * secondNum';
    } else if (userChoice === '/'){
        return 'firstNum / secondNum';
    }
}
resultOfExecution (firstNumber, choice, secondNumber);
console.log(resultOfExecution(firstNumber , choice , secondNumber));
