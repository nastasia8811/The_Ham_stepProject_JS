// // unction showPass1inp() {
// //     let x = document.getElementById("inputFirst");
// //     if (x.type === "password") {
// //         x.type = "text";
// //         document.getElementById("closeEye").className = "fas fa-eye icon-password";
// //     } else {
// //         x.type = "password";
// //         document.getElementById("closeEye").className = "fas fa-eye-slash icon-password";
// //     }
// // }
// //
// // /* Функция для второго инпута, здесь я меняю при клике на инпут значок "глаза" */
// // /* Проверяю, если у человека тип инпута = password - то меняю его на тип = text (чтобы был виден пароль) */
// // function showPass2inp() {
// //     let x = document.getElementById("checkInputFirst");
// //     if (x.type === "password") {
// //         x.type = "text";
// //         document.getElementById("closeEyeSecond").className = "fas fa-eye icon-password";
// //     } else {
// //         x.type = "password";
// //         document.getElementById("closeEyeSecond").className = "fas fa-eye-slash icon-password";
// //     }
// // }
// // const createPw = document.getElementById("inputFirst");
// // const confirmPw = document.getElementById("checkInputFirst");
//
// function showPass( createPw = document.body, confirmPw = document.body,eye = document.body){
//     if ((createPw.type === "password") && (confirmPw.type === "password")){
//         createPw.type = "text";
//         confirmPw.type = "text";
//         eye.classList.replace("fas fa-eye icon-password");
//     }else {
//         createPw.type = "password";
//         confirmPw.type = "password";
//         eye.classList.replace("fas fa-eye-slash icon-password");
//     }
// };
// showPass(document.getElementById("inputFirst"),document.getElementById("checkInputFirst"),document.getElementById("closeEye"));
// console.log(showPass)
//
//
//
// const inp1 = document.getElementById("inputFirst");
// const inp2 = document.getElementById("checkInputFirst");
// function comparePasswords(){
//     if(inp1.value === "" || inp2.value === "") {
//         alert("Поле пусте");
//     }else if (inp1.value === inp2.value){
//         alert("You are welcome!");
//     }else{
//         document.getElementById("false").innerHTML = "Потрібно ввести однакові значення";
//     }
// }