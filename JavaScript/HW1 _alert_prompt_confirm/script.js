"use strict";
let userName;
while (!userName) {
    userName = prompt("Введите Ваше имя");
}
let userAge;
userAge = prompt("Введите Ваш возраст");
if (userAge < 18) {
    alert("You are not allowed to visit this website")
}else if (userAge >= 18 || userAge <= 22) {
    (confirm("Are you sure you want to continue?"))
     alert(`Welcome, ${userName}`)
}else alert("You are not allowed to visit this website")

// if (userAge >= 23) {
//     alert(`Welcome, ${userName}`)
// }

