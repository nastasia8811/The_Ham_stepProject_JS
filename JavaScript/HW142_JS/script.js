'use strict';
let button = document.body.querySelector('#color-theme');
button.addEventListener('click', function (){
    document.body.classList.toggle("yellow-theme");
    localStorage.setItem("new","yellow");
});