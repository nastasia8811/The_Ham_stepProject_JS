const createNewUser = (firstName= null,lastName= null) => {
    return {
        firstName,
        lastName,
        get getLogin() {
            return `${this.firstName.slice(0,1).toLowerCase()}${this.lastName.toLowerCase()}`
        }
    };
};
let newUser = createNewUser(prompt("Enter your firstName"),prompt("Enter your lastName"));
console.log(newUser.getLogin);
console.log(newUser);




