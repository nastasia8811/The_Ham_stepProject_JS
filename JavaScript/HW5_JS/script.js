
const createNewUser = (firstName,lastName) => {
    const newUser = {
        firstName,
        lastName,
        getLogin: function () {
            return this.firstName.slice(0,1).toLowerCase() + lastName.toLowerCase();
        }
        }
    let getLogin = newUser.getLogin();
    console.log(newUser);
    console.log(getLogin);
    };
    createNewUser(prompt("Enter your firstName"),prompt("Enter your lastName"));

let myUser = CreateNewUser();



