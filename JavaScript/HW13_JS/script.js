'use strict';
const imagesWrapper = document.body.querySelectorAll('.images-wrapper');
const getImagine = document.body.querySelectorAll('.image-to-show');
console.log(getImagine);

let x = 0;
let recTimeout = setInterval(timerId, 3000);

    function timerId(){
        for (let el of getImagine) {
            el.style = "display: none";
        }
        getImagine[x++].style = "display:block";
        x === getImagine.length? x = 0: true;
    }
timerId();
    const getStart = document.body.querySelector('.button_start');
const getStop = document.body.querySelector('.button_stop');
function buttonActive (){
    getStop.addEventListener('click',el => clearInterval(recTimeout));
    getStart.addEventListener('click',el => setInterval(timerId,3000));
}
buttonActive()
