
let createNewUser = (firstName= null,lastName= null) => {
    return {
        firstName,
        lastName,
        get getLogin() {
            return `${this.firstName.slice(0,1).toLowerCase()}${this.lastName.toLowerCase()}`
        },
        getAge: function() {
            let today = new Date(this.getDate().getMonth().getFullYear())
            return today - this.birthday
        },
        get getPassword(){
            return `${this.firstName.slice(0,1).toUpperCase()}${this.lastName.toLowerCase()}${this.birthday.slice(6)}`
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
console.log(newUser.getPassword);