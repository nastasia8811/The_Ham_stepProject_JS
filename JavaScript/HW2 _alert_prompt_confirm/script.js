"use strict";
const userName = prompt("Введите Ваше имя");
const userAge = +prompt("Введите Ваш возраст");

if (userName (!"string")) {
    prompt("Введите Ваше имя");
} else (userName ("string")); {
    +prompt("Введите Ваш возраст");



    if (userAge (!"number")) {
        +prompt("Введите Ваш возраст");
    } else if (userAge ("number") && userAge >= 18 && userAge < 22) {
        confirm("Are you sure you want to continue?");
        alert(`Welcome, ${userName}`);
    } else {alert(`Welcome, ${userName}`);}
}



/*switch (userAge) {
    case 18:
        confirm("Are you sure you want to continue?");
        break;
    case 19:
        confirm("Are you sure you want to continue?");
        alert(`Welcome, ${userName}`);
        break;
    case 20:
        confirm("Are you sure you want to continue?");
        alert(`Welcome, ${userName}`);
        break;
    case 21:
        confirm("Are you sure you want to continue?");
        alert(`Welcome, ${userName}`);
        break;
    case 22:
        alert(`Welcome, ${userName}`);
        break;

    default:
        alert("You are not allowed to visit this website");
}

if (userAge < 17) {
    alert("You are not allowed to visit this website");
}
else if (userAge >= 18 && userAge < 22) {
    (confirm("Are you sure you want to continue?"));
        alert(`Welcome, ${userName}`);
}else if (userAge (false)){
    alert("You are not allowed to visit this website");
}
else if (userAge === 22) {
    alert(`Welcome, ${userName}`);
} else {
     alert("You are not allowed to visit this website");
}*/
