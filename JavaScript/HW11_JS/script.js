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
function comparePasswords(){
    if(inp1.value === "" || inp2.value === "" ) {
        alert("Поле пусте");
    }else if (inp1.value === inp2.value){
        alert("You are welcome!");
    }else{
        document.getElementById("false").innerHTML = "Потрібно ввести однакові значення";
    }
}

