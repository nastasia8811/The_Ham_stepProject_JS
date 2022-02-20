"use strict";
let userName;
while (!userName) {
    userName = prompt("Введите Ваше имя");
}
let userAge;
userAge = prompt("Введите Ваш возраст");
if (userAge < 18) {
    alert("You are not allowed to visit this website")
}else if (userAge >= 18 || userAge <= 22)) {
    (confirm(`Welcome, ${userName}`))
}else alert("You are not allowed to visit this website")

if (userAge >= 23) {
    alert(`Welcome, ${userName}`)
}

