//Теоретичні питання

// 1) Які існують типи даних у Javascript?

// Число «number» - примітивні
// Число «bigint»
// Строка «string» - примітивні
// Булевий (логічний) тип «boolean» - примітивні
// «null» - примітивні
// «undefined» - примітивні
// «symbol»
// «object» - примітивні

// 2) У чому різниця між == і ===?

// == - порівняння (тип не порівнюється)
// === - строге порівняння (порівнується також тип)

// 3) Що таке оператор?

//за допомогою операторів ми можемо порівнювати операнди, додавати, віднімати, множити , ділити,
//брати остаток від ділення %, приведення до ступеню **.
//об'єднувати строки з числами і т.п.

// Завдання

"use strict";
const userName = prompt("Введите Ваше имя", "");
const userAge = +prompt("Введите Ваш возраст", "");

while (!userName) { prompt("Введите Ваше имя", "") }
while (isNaN(userAge)) { +prompt("Введите Ваш возраст", "") }

if (userAge >= 18 && userAge <= 22 && confirm("Are you sure you want to continue?")) {
    alert(`Welcome, ${userName}`);
 } else if (userAge > 22) {
    alert(`Welcome, ${userName}`);
} else {
     alert("You are not allowed to visit this website");}
