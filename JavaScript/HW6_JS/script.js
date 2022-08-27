let createNewUser = (firstName= null,lastName= null,birthday = null) => {
    return {
        firstName,
        lastName,
        birthday,
        getLogin: function () {
            return `${this.firstName.slice(0,1).toLowerCase()}${this.lastName.toLowerCase()}`
        },
         getAge: function () {
            let today = new Date()
             let dd = this.birthday.slice(0,2);
             let mm = this.birthday.slice(3,5);
             let yyyy = this.birthday.slice(6);
             let date = today.getFullYear() - yyyy;
             if (mm > today.getMonth() || (mm === today.getMonth() && dd > today.getDay())){
                 date--;
             }
              return date
        },
        getPassword: function () {
            return `${this.firstName.slice(0,1).toUpperCase()}${this.lastName.toLowerCase()}${this.birthday.slice(6)}`
        },
};
};
let newUser = createNewUser(prompt("Enter your firstName"),prompt("Enter your lastName"),prompt("Enter your birthday",""));
console.log(newUser.getLogin());
console.log(newUser.getPassword());
console.log(newUser.getAge());
console.log(newUser);


