"use strict";
const userName = prompt("Введите Ваше имя");
let userAge = +prompt("Введите Ваш возраст");

if (userAge < 17) {
    alert("You are not allowed to visit this website");
}
else if (userAge > 18 && userAge < 22) {
    (confirm("Are you sure you want to continue?"));
        alert(`Welcome, ${userName}`);
}else {
    alert("You are not allowed to visit this website");
}


do {
let userName;
let userAge;
while (!userName){
    userName = prompt("Введите Ваше имя");
}


"use strict";
do {
    let studentName;
    let studentMark;
    let markLabel;
    while (!studentName || !studentName.trim().includes(" ")) {
        studentName = prompt("введите ФИО студнта");
    }
    while (!isFinite(studentMark) <= 0 || studentMark <= 100) {
        studentMark = prompt("введите оценку");
    }
    switch (true) {
        case(studentMark <= 24):
            markLabel = "F";
            break;
        case(studentMark <= 49):
            markLabel = "E";
            break;
        case(studentMark <= 54):
            markLabel = "D";
            break;
        case(studentMark <= 59):
            markLabel = "D+";
            break;
        case(studentMark <= 64):
            markLabel = "C-";
            break;
        case(studentMark <= 69):
            markLabel = "C";
            break;
        case(studentMark <= 74):
            markLabel = "C+";
            break;
        case(studentMark <= 79):
            markLabel = "B-";
            break;
        case(studentMark <= 84):
            markLabel = "B";
            break;
        case(studentMark <= 89):
            markLabel = "B+";
            break;
        case(studentMark <= 94):
            markLabel = "A-";
            break;
        default:
            markLabel = "A";
    }

    alert(`«К студенту ИМЯ_СТУДЕНТА прикреплена оценка ${studentMark}.»`);
    while (confirm ("сконвертировать оценку для ещё одного студента"));

    alert("«Нет.»");
}

