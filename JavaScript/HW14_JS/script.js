'use strict';
window.onload = function (){
    if (localStorage.getItem("new")!== null) {
        let color = localStorage.getItem("new");
        document.getElementsByTagName("body")[0].style.background = color;
    }
    document.getElementById("green").onclick = function(){
        console.log("work");
        document.getElementsByTagName("body")[0].style.background = "green";
        localStorage.setItem("new","green");
    }
    document.getElementById("yellow").onclick = function(){
        console.log("work");
        document.getElementsByTagName("body")[0].style.background = "yellow";
        localStorage.setItem("new","yellow");
}
}