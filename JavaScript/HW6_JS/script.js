let createNewUser = (firstName= null,lastName= null,) => {
    return {
        firstName,
        lastName,
        get getLogin() {
            return `${this.firstName.slice(0,1).toLowerCase()}${this.lastName.toLowerCase()}`
        },
         getAge: function () {
            let today = new Date()
                 const dd = addLeadingZero(today.getDate());
                 const mm = addLeadingZero(today.getMonth() + 1);
                 const yyyy = today.getFullYear();
             return today - isNaN(this.birthday);
        },
        get getPassword() {
            return `${this.firstName.slice(0,1).toUpperCase()}${this.lastName.toLowerCase()}${this.birthday.slice(6)}`
        },
};
};
let newUser = createNewUser(prompt("Enter your firstName"),prompt("Enter your lastName"));
function addLeadingZero (d){
    return (d<10) ? "0" + d : d;
}
addLeadingZero()
newUser.birthday = new Date(prompt("Enter your birthday",""));
const dd = addLeadingZero(newUser.birthday.getDate());
const mm = addLeadingZero(newUser.birthday.getMonth() + 1);
const yyyy = newUser.birthday.getFullYear();
newUser.birthday = (`${dd}.${mm}.${yyyy}`);
console.log(newUser);
console.log(newUser.birthday);
console.log(newUser.getLogin);
console.log(newUser.getPassword);
console.log(newUser.getAge());


