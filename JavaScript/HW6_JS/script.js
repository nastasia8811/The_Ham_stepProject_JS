
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
newUser.birthday = new Date(prompt("Enter your birthday",""));
const dd = String(newUser.birthday.getDate()).padStart(2, '0');
const mm = String(newUser.birthday.getMonth() + 1).padStart(2, '0');
const yyyy = newUser.birthday.getFullYear();
newUser.birthday = mm + '.' + dd + '.' + yyyy;

console.log(newUser.birthday);
console.log(newUser.getLogin);
console.log(newUser);


newUser.getAge = function() {
    const now = new Date(); //Текущя дата
    const today = new Date(now.getDate(),now.getMonth(),now.getFullYear()); //Текущя дата без времени
    const dob = new Date(newUser.birthday); //Дата рождения
    let age = getAge.today - newUser.birthday;
};
newUser.getAge()
console.log(createNewUser(newUser.getAge));