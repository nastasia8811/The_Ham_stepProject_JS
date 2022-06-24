const createPw = document.querySelector(".input-wrapper");
const confirmPw = document.querySelector(".fas");
const pwShow = document.querySelector(".icon-password");
const alertIcon = document.querySelector(".fa-eye");
const alertText= document.querySelector(".input-wrapper");
const submitBtn = document.querySelector(".btn");

pwShow.addEventListener("click", (e) => {
    if (createPw.type === "password") {
        createPw.type = "text";
        confirmPw.type = "text";
        pwShow.classList.replace("fa-eye-slash","fa-eye");
    }else {
        createPw.type = "password";
        confirmPw.type = "password";
        pwShow.classList.replace("fa-eye","fa-eye-slash");
    }
});

createPw.addEventListener("input", (event) => {
    let val = createPw.value.trim()
    if(val.length >= 8){
        confirmPw.removeAttribute("disabled");
        submitBtn.removeAttribute("disabled");
        submitBtn.classList.add("active");
    }else {
        confirmPw.setAttribute("disabled", true);
        submitBtn.setAttribute("disabled", true);
        submitBtn.classList.remove("active");
        confirmPw.value = "";
        alertText.style.color = "#a6a6a6";
        alertText.innerText = "Enter at least 8 characters";
        alertIcon.style.display = "none";
    }
});

submitBtn.addEventListener("click", ()=>{
    if(createPw.value === confirmPw.value){
        alertText.innerText = "Password matched";
        alertIcon.style.display = "none";
        alertText.style.color = "#4070F4";
    }else {
        alertText.innerText = "Password didn't matched";
        alertIcon.style.display = "block";
        alertText.style.color = "#D93025";
    }
});










