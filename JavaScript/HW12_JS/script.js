// Теоретичні питання
//
// Чому для роботи з input не рекомендується використовувати клавіатуру?
//     Завдання
//
//     Реалізувати функцію підсвічування клавіш.
//     Технічні вимоги:
//     Кожна кнопка містить назву клавіші на клавіатурі
//     Після натискання вказаних клавіш - та кнопка, на якій написана ця літера, повинна фарбуватися в синій колір.
//     При цьому якщо якась інша літера вже раніше була пофарбована в синій колір - вона стає чорною.
//     Наприклад за натисканням Enter перша кнопка забарвлюється у синій колір. Далі, користувач натискає S,
//     і кнопка S забарвлюється в синій колір, а кнопка Enter знову стає чорною.

const letter = document.querySelector('.btn-wrapper');
const buttonColor = document.querySelector('.btn');
let which;
window.addEventListener("keydown", (e) => {
    which = e.keyCode;
    console.log(which);
})

window.addEventListener('keydown',(event) => {
    if (which.classList('btn')) {
        const dataLetter = event.keyCode.dataset.letter;
        const wrapper = document.querySelectorAll('.btn-wrapper');
        for (let i = 0; i < wrapper.length; i++) {
            wrapper[i].classList.style.background('.active');
            event.keyCode.classList.add('active');
        }

        const buttonBlue = document.querySelectorAll(".btn-wrapper .btn");

        for (let i = 0; i < buttonBlue.length; i++) {
            buttonBlue[i].classList.remove('active');

            const dataContent = buttonBlue[i].dataset.content;
            if (event.code === dataContent) {
                dataContent[i].classList.add('active');
            }
            dataContent[i].classList.remove('active');
        }
    }})


    // var a = document.getElementsByClassName("btn");
    //
    // let which;
    // /*Ищем какую кнопку по номеру человек нажал, у каждой кнопки есть свой номер*/
    // /*https://keycode.inicar.info/KeyCode/1_KeyCode.php*/
    //
    // window.addEventListener("keydown", (e) => {
    // //tested in IE/Chrome/Firefox
    // which = e.keyCode;
    // console.log(which);})
//
//     /*Если нажат Enter - везде убираем цвет, только Enter оставляем*/
//     if(which == 13) {
//     document.getElementById("Enter").className = "btn active";
//     document.getElementById("E").className = "btn";
//     document.getElementById("O").className = "btn";
//     document.getElementById("N").className = "btn";
//     document.getElementById("L").className = "btn";
//     document.getElementById("Z").className = "btn";
//     document.getElementById("S").className = "btn";
// }
//     /*Если нажат S - везде убираем цвет, только S оставляем*/
//     if(which == 83) {
//     document.getElementById("Enter").className = "btn";
//     document.getElementById("E").className = "btn";
//     document.getElementById("O").className = "btn";
//     document.getElementById("N").className = "btn";
//     document.getElementById("L").className = "btn";
//     document.getElementById("Z").className = "btn";
//     document.getElementById("S").className = "btn active";
// }
//     /*Если нажатa E - везде убираем цвет, только E оставляем*/
//     if(which == 69) {
//     document.getElementById("Enter").className = "btn";
//     document.getElementById("E").className = "btn active";
//     document.getElementById("O").className = "btn";
//     document.getElementById("N").className = "btn";
//     document.getElementById("L").className = "btn";
//     document.getElementById("Z").className = "btn";
//     document.getElementById("S").className = "btn";
// }
//     /*Если нажатa O - везде убираем цвет, только O оставляем*/
//     if(which == 79) {
//     document.getElementById("Enter").className = "btn";
//     document.getElementById("E").className = "btn";
//     document.getElementById("O").className = "btn active";
//     document.getElementById("N").className = "btn";
//     document.getElementById("L").className = "btn";
//     document.getElementById("Z").className = "btn";
//     document.getElementById("S").className = "btn";
// }
//     /*Если нажатa N - везде убираем цвет, только N оставляем*/
//     if(which == 78) {
//     document.getElementById("Enter").className = "btn";
//     document.getElementById("E").className = "btn";
//     document.getElementById("O").className = "btn";
//     document.getElementById("N").className = "btn active";
//     document.getElementById("L").className = "btn";
//     document.getElementById("Z").className = "btn";
//     document.getElementById("S").className = "btn";
// }
//     /*Если нажатa L - везде убираем цвет, только L оставляем*/
//     if(which == 76) {
//     document.getElementById("Enter").className = "btn";
//     document.getElementById("E").className = "btn";
//     document.getElementById("O").className = "btn";
//     document.getElementById("N").className = "btn";
//     document.getElementById("L").className = "btn active";
//     document.getElementById("Z").className = "btn";
//     document.getElementById("S").className = "btn";
// }
//     /*Если нажатa Z - везде убираем цвет, только Z оставляем*/
//     if(which == 90) {
//     document.getElementById("Enter").className = "btn";
//     document.getElementById("E").className = "btn";
//     document.getElementById("O").className = "btn";
//     document.getElementById("N").className = "btn";
//     document.getElementById("L").className = "btn";
//     document.getElementById("Z").className = "btn active";
//     document.getElementById("S").className = "btn";
// }
// })
//
