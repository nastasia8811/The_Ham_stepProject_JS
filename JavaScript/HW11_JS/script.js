const createPw = document.getElementById("inputFirst");
const confirmPw = document.getElementById("checkInputFirst");
function showPass1inp() {
    if (createPw.type === "password") {
        createPw.type = "text";
        document.getElementById("closeEye").className = "fas fa-eye icon-password";
    } else {
        createPw.type = "password";
        document.getElementById("closeEye").className = "fas fa-eye-slash icon-password";
    }
}
const btn = document.body.querySelector('.btn')
btn.addEventListener('click', function(event) {
    event.preventDefault();
});

function showPass2inp() {
    if (confirmPw.type === "password") {
        confirmPw.type = "text";
        document.getElementById("closeEyeSecond").className = "fas fa-eye icon-password";
    } else {
        confirmPw.type = "password";
        document.getElementById("closeEyeSecond").className = "fas fa-eye-slash icon-password";
    }
}
const inp1 = document.getElementById("inputFirst");
const inp2 = document.getElementById("checkInputFirst");
function comparePasswords() {
    if(inp1.value === "" || inp2.value === "" ) {
        alert("Поле пусте");
    }else if (inp1.value === inp2.value){
        alert("You are welcome!");
    }else{
        document.getElementById("false").innerHTML = "Потрібно ввести однакові значення";
    }
}
// function preventEvent( event ) {
//     if ( event.cancelable ) { //  если событие может быть отменено и предотвращено
//         event.preventDefault(); // отменяем действие события по умолчанию
//         console.log("Событие " + event.type + " отменено"); //  выводим в консоль информацию о том какое событие было отменено
//     } else { //  если событие не может быть отменено и предотвращено
//         console.warn("Событие " + event.type + " не может быть отменено"); //  выводим в консоль информацию о том, что данное событие не может быть отменено
//     }
