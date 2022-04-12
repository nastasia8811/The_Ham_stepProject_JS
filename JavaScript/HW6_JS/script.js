//1) Функція, яка є властивістю об'єкту, називається методом цього объекта.

//2) строка

//3) Посилальні типи –  ці типи можуть містити дуже великі обсяги дуже різнорідних даних,
// змінна, що містить тип посилання, фактично його значення не містить. Вона містить посилання місце у пам'яті,
// де розміщуються реальні дані.


let createNewUser = (firstName= null,lastName= null) => {
    return {
        firstName,
        lastName,
        get getLogin() {
            return `${this.firstName.slice(0,1).toLowerCase()}${this.lastName.toLowerCase()}`
        },
    };
};
let newUser = createNewUser(prompt("Enter your firstName"),prompt("Enter your lastName"));
console.log(newUser.getLogin);
console.log(newUser);

newUser.birthday = createNewUser (prompt("Enter your birthday",""));
newUser.birthday = new Date();
console.log(newUser.birthday);







