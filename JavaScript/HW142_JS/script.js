'use strict';

let state = true;

document.body.style.backgroundColor = localStorage.getItem('bgcolor') || 'yellow';

function change(){
    if (state){
        document.body.style.backgroundColor = "red";
        document.getElementById('color-theme').style.color='blue';
        localStorage.setItem('bgcolor', 'red');

    } else {
        document.body.style.backgroundColor = "#005fff";
        document.getElementById('color-theme').style.color='lightgreen';
        localStorage.setItem('bgcolor', '#005fff');
    }
    state = !state;
}