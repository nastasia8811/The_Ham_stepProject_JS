// Теоретичні питання

// 1)  Змінну можна оголосити трьома способами
// var (застарілий спосіб, не використовуємо), let (значення можна перезаписувати значення в змінну декілька разів),
// const (значення в змінну можна записати лише один раз)

// 2) Функція prompt виводить модальне вікно з текстовим повідомленням, полем, куди відвідувач може ввести текст,
// та кнопками ОК/Скасувати.
// Виклик prompt повертає текст із поля введення або null, якщо введення було скасовано.
// Функція confirm виводить модальне вікно з питанням question та двома кнопками: ОК та Скасувати.
// Результат: true, якщо натиснути кнопку OK, інакше — false.

// 3) неявне перетворення типів виникає в процессі роботи якихось операторів, винкає само без наших дій.
// ПРИКЛАД
//     const name;
//     name = 1 + "true";    //'1true'
//     name = 1 + true;       //2
//     name = 1 + undefined; //NaN
//     name = 1 + null;     //1

// ЗАВДАННЯ

//1)
let admin;
const name = "Anastasiia";
admin = name;
console.log(admin);

//2)
let days = 10;
console.log(days * 86400);

//3)
const userName = prompt("How are you?");
console.log (userName);